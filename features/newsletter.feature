# language: pt
Funcionalidade: Newsletter
  Como um visitante do site
  Quero cadastrar meu e-mail na newsletter
  Para receber ofertas e novidades

  Cenário: Inscrição com sucesso na newsletter
    Dado que estou na página inicial do site
    Quando insiro o e-mail "teste_qa@email.com" no campo da newsletter
    E clico no botão de enviar
    Então o sistema deve exibir a mensagem de sucesso "Thank you for your Subscribtion"