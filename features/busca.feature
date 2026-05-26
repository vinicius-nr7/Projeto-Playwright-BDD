# language: pt
Funcionalidade: Busca de produtos

  Cenário: Buscar produto existente
    Dado que estou na página inicial
    Quando eu busco por "T-Shirt For Men"
    Então devo ver o produto "T-Shirt For Men" listado

    Cenário: Buscar produto inexistente
    Dado que estou na página inicial
    Quando eu busco por "Produto Fantasma Que Nao Existe"
    Então devo ver a mensagem "Nenhum produto encontrado"