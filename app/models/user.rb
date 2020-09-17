class User < ApplicationRecord
    has_secure_password
    # verifica se username é unico
    validates :username, uniqueness: true
    # verifica se username esta presente
    validates :username, presence: true
    # verificação de password
    validates :password, length: {minimum: 8}, allow_nil: false, allow_blank: false
    validates_confirmation_of :password, allow_nil: false, allow_blank: false

    # verifica se o usuario pode alterar dados
    def can_make_changes?(user_id)
        role == 'admin' || id.to_s == user_id.to_s
    end
    # verifica se admin
    def is_admin?
        role == 'admin'
    end
end
