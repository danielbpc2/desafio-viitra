class Person < ApplicationRecord
  belongs_to :user
  validates :name, presence: true
  validates :cpf, presence: true
  validates :birthdate, presence: true
  validates :email, presence: true
  validates :phone, presence: true
  validates :address, presence: true
  validates :cep, presence: true
  validates :city, presence: true
  validates :uf, presence: true
end
