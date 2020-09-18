![Logo](https://raw.githubusercontent.com/danielbpc2/desafio-viitra/3d19b771ee493226fe27c720228621d5620873ed/frontend/src/assets/viitrafio.svg)
## 🌟 Objetivo do desafio
O teste consiste no desenvolvimento de um CRUD em 48h para testar a minha criatividade na hora de resolver um problema! Podendo minha CRIATIVIDADE para desenvolver além dos Requisitos do Desafio!

## 📢 Requisitos do Desafio
● Cadastro de usuário (Nome, CPF, Data Nascimento, Email, Telefone,
Endereço, CEP, Cidade, Estado;
● Ao cadastrar um novo usuário, quando selecionar o estado deverá aparecer
às suas respectivas cidades no campo cidade;
● Listar os usuários cadastrados (Ao clicar em um usuário, redirecionar para
uma tela com as informações do mesmo);
● Editar os dados do usuário;
● Deletar usuários a partir da tela de listagem ou de edição

## 🖥O necessário para rodar essa aplicação:

* Ruby versão '2.5.6'

* `bundler` na versão '2.1.4' 

* Database `Mysql` instalado na maquina com um database chamado `desafio_viitra` e um User com o username: `viitra` e senha `admin123` com todos os direitos sobre o DB
    * **sugestão utilizar o docker**: https://hub.docker.com/_/mysql <br />

* No projeto foi utilizado o `yarn` como gerenciador de pacotes, mas pode ser utilizado o `npm`.

## ⏯ Utilização

# 🔨 Rodando o Backend
**1.** Utilize seu terminal para ir no diretorio `backend` deste projeto.
**2.** Rode o comando `bundle` para instalar as dependencias necessárias.
**3.** Rode o comando `rails db:migrate` para aplicar as migrações.
**4.** Rode o comando `rails db:seed` para gerar usuários padrões.
**5.** Rode o comando `rails server -p 3333` para rodar a api na porta 3333.

# 📃 Rodando o Frontend
**1.** Em outro Terminal abra o diretorio `frontend` deste projeto.
**2.** Rode o comando `yarn` para instalar as dependencias necessárias.
**3.** Rode o comando `yarn start` para iniciar a aplicação.
**4.** Espere seu navegador carregar a aplicação
