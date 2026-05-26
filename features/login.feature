# language: pt
Funcionalidade: Login no Sistema
  Como um usuário cadastrado na Automation Practice
  Quero realizar o login
  Para acessar minha conta

  Cenário: Tentativa de login sem preencher os campos
    Dado que estou na página de login do site
    Quando clico no botão "Entrar" sem preencher e-mail e senha
    Então devo ver o alerta de erro "E-mail inválido."