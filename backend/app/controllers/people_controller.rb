class PeopleController < ApplicationController
  before_action :set_person, only: [:show, :update, :destroy]
  before_action :authorized
  # GET /people
  def index
    @people = Person.where(user_id: @user.id)

    render json: @people
  end

  # GET /people/1
  def show
    render json: @person
  end

  # POST /people
  def create
    @person = Person.new(person_params)
    @person.user_id = @user.id

    if @person.save
      render json: @person, status: :created, location: @person
    else
      render json: @person.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /people/1
  def update
    if @person.user_id != @user.id
      return render json: { message: "Você não tem permissão para essa ação" }, status: :unauthorized
    end

    if @person.update(person_params)
      render json: @person
    else
      render json: @person.errors, status: :unprocessable_entity
    end
  end

  # DELETE /people/1
  def destroy
    if @person.user_id != @user.id
      return render json: { message: "Você não tem permissão para essa ação" }, status: :unauthorized
    end

    @person.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_person
    @person = Person.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def person_params
    params.require(:person).permit(:name, :cpf, :birthdate, :email, :phone, :address, :cep, :city, :uf, :user_id)
  end
end
