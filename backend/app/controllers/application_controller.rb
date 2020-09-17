class ApplicationController < ActionController::API
    # roda a autorização antes de cada chamada
    before_action :authorized
    
    # recebe o payload e encripta com a env.secret
    def encode_token(payload)
      JWT.encode(payload, 'secret')
    end
  
    # pega a autorização do header
    def auth_header
      # { Authorization: 'Bearer <token>' }
      request.headers['Authorization']
    end
  
    # se o header está presente ele decodifica e puxa o payload
    def decoded_token
      if auth_header
        token = auth_header.split(' ')[1]
        # header: { 'Authorization': 'Bearer <token>' }
        begin
          JWT.decode(token, 'secret', true, algorithm: 'HS256')
        rescue JWT::DecodeError
          nil
        end
      end
    end
  
    def logged_in_user
      if decoded_token
        user_id = decoded_token[0]['user_id']
        @user = User.find_by(id: user_id)
      end
    end

    # verifica se está logado
    def logged_in?
      !!logged_in_user
    end
  
    # retorna uma mensagem pedindo pra logar
    def authorized
      render json: { message: 'Você não está logado, pfv logar' }, status: :unauthorized unless logged_in?
    end
end
