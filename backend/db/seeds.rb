# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!({
  name: "Daniel",
  password: "admin123",
  cpf: "050.290.934-00",
  birthdate: Date.parse("09/10/1993"),
  email: "danielbpc@email.com",
  phone: "81998301892",
  address: "Rua faustino porto, 200",
  cep: "51020270",
  city: "recife",
  uf: "Pe",
  role: "admin",
})

User.create!({
  name: "Cassio",
  password: "normal123",
  cpf: "212.290.934-00",
  birthdate: Date.parse("09/10/1993"),
  email: "cassio@email.com",
  phone: "81997863215",
  address: "Rua não porto, 102",
  cep: "51020280",
  city: "recife",
  uf: "Pe",
})

Person.create!({
  name: "Diego Carvalho",
  cpf: "111.123.123-00",
  birthday: "19/07/2020",
  email: "diegoP@email.com",
  address: "rua ali perto",
  phone: "999999999",
  cep: "51202-123",
  city: "Recife",
  uf: "PE",
  user_id: User.first,
})
