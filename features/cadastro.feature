# language: pt
Funcionalidade: Cadastro de Usuário
  Como um novo cliente da Automation Practice
  Quero preencher o formulário de cadastro
  Para criar uma conta com sucesso

Cenário: Cadastro efetuado com dados válidos
  Dado que estou na página de cadastro do site
  Quando preencho o campo de nome com "Vinicius"
  E preencho o campo de e-mail com um e-mail válido
  E preencho a senha com "Senha@123"
  E clico no botão "Cadastrar"
  Então devo ver a mensagem de boas-vindas "Cadastro realizado!"

Cenário: Validar e-mail obrigatório no cadastro
    Dado que estou na página de cadastro do site
    Quando eu tento cadastrar um usuário sem preencher o e-mail
    Então o sistema deve exibir o alerta "O campo e-mail deve ser prenchido corretamente"