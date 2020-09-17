class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :cpf, null: false
      t.date :birthdate, null: false
      t.string :email, null: false
      t.string :phone, null: false
      t.string :address, null: false
      t.string :cep, null: false
      t.string :city, null: false
      t.string :uf, null: false
      t.string :password_digest, null: false

      t.timestamps
    end
  end
end
