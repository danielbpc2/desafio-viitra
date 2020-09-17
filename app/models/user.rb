class User < ApplicationRecord
  has_secure_password
  # verifica se username é unico
  validates :email, uniqueness: { case_sensitive: true }
  # verifica se username esta presente
  validates :email, presence: true
  # verificação de password
  validates :password, length: { minimum: 8 }, allow_nil: false, allow_blank: true
  validates :password, presence: true

  # verifica se o usuario pode alterar dados
  def can_make_changes?(user_id)
    role == "admin" || id.to_s == user_id.to_s
  end

  # verifica se admin
  def is_admin?
    role == "admin"
  end
end
