<h1>Formulário em NODE com Express, Knex e EJS</h1> 

> Status do Projeto: :heavy_check_mark: (concluido)

### Tópicos 

:arrow_right: [Descrição do projeto](#descrição-do-projeto)

:arrow_right: [Pré-requisitos](#pré-requisitos)

:arrow_right: [Configurando seu ambiente](#configurando-seu-ambiente)

:arrow_right: [Configurando seu banco no knex](#configurando-seu-banco-no-knex)

:arrow_right: [Rodando o Formulário :arrow_forward:](#rodando-o-formulário-arrow_forward)

:arrow_right: [Perguntas frequentes :question:](#perguntas-frequentes-question)


## Descrição do projeto 

<p align="justify">
  Formulário node simples e prático!
</p>
 
## Pré-requisitos
:warning: [Node](https://nodejs.org/en/download/)

## Configurando seu ambiente
- No terminal, clone o projeto: 
```
git clone https://github.com/vinirb15/form_node.git
```
- Acesse instale algumas dependências...
```
cd form_node
```
```
npm install express knex
npm install bcrypt body-parser ejs mysql --save 
npm install -D nodemon
``` 

## Configurando seu banco no knex
- Configure o knexfile.js com as informações de acesso ao banco
- Execute a migração que irá criar as tabelas no seu banco com o comando:
```
npx knex migrate:latest
```
## Rodando o Formulário :arrow_forward:
```
npm start
``` 

## Linguagens, dependencias e libs utilizadas :books:

- [Knex](http://knexjs.org)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [EJS](https://ejs.co)
- [BCRYPT](https://www.npmjs.com/package/bcrypt)

## Perguntas frequentes :question:
- Posso utilizar um modelo diferente de banco de dados que não seja o mysql:grey_question:
:arrow_right_hook: Sim, na documentação do knexjs possui outros templates de bancos diferentes
- Qual a porta configurada para rodar a index:grey_question:
:arrow_right_hook: Assim que roda a aplicação, a home-page fica visível na porta 3000
- Porque possui um campo input password no formulário:grey_question:
:arrow_right_hook: Tomei a liberdade de criar um modelo de ser facilmente adaptável para uma aba de login, ele toma conta de criptografar a senha para salvar no banco através do bcrypt

## Licença 

The [MIT License]() (MIT)

Copyright :copyright: Ano 2020 - Formulário Nodejs
