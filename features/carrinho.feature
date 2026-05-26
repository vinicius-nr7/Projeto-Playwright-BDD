# language: pt
Funcionalidade: Adicionar produto ao carrinho

  Cenário: Adicionar produto existente
    Dado que estou na página inicial
    Quando eu seleciono o produto "Green Dress For Woman"
    E eu clico em "Adicionar ao carrinho"
    Então devo ver "Green Dress For Woman" no carrinho