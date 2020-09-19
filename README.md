![Logo](https://raw.githubusercontent.com/danielbpc2/desafio-viitra/3d19b771ee493226fe27c720228621d5620873ed/frontend/src/assets/viitrafio.svg)
#### 🌟 Objetivo do desafio
O teste consiste no desenvolvimento de um CRUD em 48h para testar a minha criatividade na hora de resolver um problema! Podendo minha CRIATIVIDADE para desenvolver além dos Requisitos do Desafio!

#### 📢 Requisitos do Desafio
● Cadastro de usuário (Nome, CPF, Data Nascimento, Email, Telefone, Endereço, CEP, Cidade, Estado;<br/>
● Ao cadastrar um novo usuário, quando selecionar o estado deverá aparecer às suas respectivas cidades no campo cidade; <br/>
● Listar os usuários cadastrados (Ao clicar em um usuário, redirecionar para uma tela com as informações do mesmo);<br/>
● Editar os dados do usuário<br/>
● Deletar usuários a partir da tela de listagem ou de edição <br/>

#### 💻 O que esse sistema faz

   Este sistema é um gerenciador e armazenador de informações de usuário, ao se registrar você pode: <br/>
   * Cadastrar informações de usuário (Nome, CPF, Data Nascimento, Email, Telefone, Endereço, CEP, Cidade, Estado)<br/>
   * Apagar e editar tais informações adicionadas.
   
## 📚 Tecnologias usadas:

- [Autenticação JWT](https://github.com/jwt/ruby-jwt)
- [Ruby on Rails](https://github.com/rails/rails)
- [React](https://github.com/facebook/react)
- [Typescript](https://github.com/microsoft/TypeScript)
- [Prettier](https://github.com/prettier/prettier)

## 🖥O necessário para rodar essa aplicação:

* Ruby versão '2.5.6'

* `bundler` na versão '2.1.4' 

* Database `Mysql` instalado na maquina com um database chamado `desafio_viitra` e um User com o username: `viitra` e senha `admin123` com todos os direitos sobre o DB
    * **sugestão utilizar o docker**: https://hub.docker.com/_/mysql <br />

* No projeto foi utilizado o `yarn` como gerenciador de pacotes, mas pode ser utilizado o `npm`.

## ⏯ Utilização

### 🔨 Rodando o Backend
**1.** Utilize seu terminal para ir no diretorio `backend` deste projeto. <br/>
**2.** Rode o comando `bundle` para instalar as dependencias necessárias.<br/>
**3.** Rode o comando `rails db:migrate` para aplicar as migrações.<br/>
**4.** Rode o comando `rails db:seed` para gerar usuários padrões.<br/>
**5.** Rode o comando `rails server -p 3333` para rodar a api na porta 3333.<br/>

### 📃 Rodando o Frontend
**1.** Em outro Terminal abra o diretorio `frontend` deste projeto.<br/>
**2.** Rode o comando `yarn` para instalar as dependencias necessárias.<br/>
**3.** Rode o comando `yarn start` para iniciar a aplicação.<br/>
**4.** Espere seu navegador carregar a aplicação<br/>
