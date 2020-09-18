class CreatePeople < ActiveRecord::Migration[6.0]
  def change
    create_table :people do |t|
      t.string :name
      t.string :cpf
      t.date :birthdate
      t.string :email
      t.string :phone
      t.string :address
      t.string :cep
      t.string :city
      t.string :uf
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
