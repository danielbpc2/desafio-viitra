class UsersController < ApplicationController
  before_action :authorized, except: [:login, :create]

  def index
    @users = User.all
    response = @users.map { |user|
      {
        id: user.id, name: user.name, address: user.address,
        cpf: @user.cpf,
        birthdate: @user.birthdate,
        email: @user.email,
        phone: @user.phone,
        address: @user.address,
        cep: @user.cep,
        city: @user.city,
        uf: @user.uf,
        created_at: @user.created_at,
        updated_at: @user.updated_at,
        role: @user.role,
      }
    }
    render json: response
  end

  def create
    @new_user = User.new(user_params)
    if params[:role].present? && @user.is_admin?
      return render json: { message: "Você não tem permissão para essa ação" }, status: :unauthorized
    end

    if @new_user.save
      token = encode_token({ user_id: @new_user.id })
      render json: @new_user
    else
      render json: { error: true, errors: @new_user.errors }, status: 200
    end
  end

  def show
    render json: @params_user
  end

  def update
    if !@user.can_make_changes?(params[:id])
      return render json: { message: "Você não tem permissão para essa ação" }, status: :unauthorized
    end

    if @params_user.update(user_params)
      render json: @params_user
    else
      render json: @params_user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if !@user.can_make_changes?(params[:id])
      return render json: { message: "Você não tem permissão para essa ação" }, status: :unauthorized
    end

    if @params_user.destroy!
      render json: { message: "deleted" }, status: 200
    else
      render json: { message: "there was an error" }, status: :unprocessable_entity
    end
  end

  # faz login
  def login
    @user = User.find_by(email: params[:email])

    if @user && @user.authenticate(params[:password])
      token = encode_token({ user_id: @user.id })
      render json: { user: @user, token: token }
    else
      render json: { error: "Invalid username or password" }
    end
  end

  def auto_login
    render json: @user
  end

  private

  def set_user
    @params_user = User.find(params[:id])
  end

  def user_params
    params.permit(:name, :password, :birthdate, :cpf, :email, :phone, :address, :cep, :city, :uf, :role)
  end
end
