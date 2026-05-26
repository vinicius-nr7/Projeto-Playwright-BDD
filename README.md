🛒 E-commerce Test Suite (Playwright + BDD)
Este projeto automatiza os testes de um e-commerce, simulando um usuário real navegando pelo site. O foco é garantir que os fluxos críticos de negócio funcionem sempre como esperado, cobrindo tanto o sucesso quanto as situações de erro.

🎯 O que este projeto testa?
Caminhos Felizes (Sucesso):

✅ Login: Garante que o acesso funciona com credenciais válidas.

✅ Cadastro: Testa o registro completo de novos clientes.

✅ Busca: Verifica se a busca de produtos entrega o resultado esperado.

✅ Carrinho e Newsletter: Valida se as funções de compra e inscrição estão ativas.

Cenários Negativos (Resiliência):

⚠️ Login sem dados: Garante que o sistema trata corretamente o envio de formulários vazios.

⚠️ Cadastro obrigatório: Valida que o sistema impede o registro sem os campos essenciais.

⚠️ Busca inexistente: Verifica se o sistema exibe a mensagem correta quando o produto pesquisado não é encontrado.

⚡ Como rodar o projeto?
1. Clone o repositório:
git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git]
(https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)

3. Instale as ferramentas necessárias:
npm install

4. Inicie a automação:
npm run test:bdd

💡 O que acontece ao rodar?
Ao dar o comando final, o navegador abre sozinho e você vê o teste acontecendo na tela, como se uma pessoa estivesse usando o site. Ao terminar, o seu terminal mostrará:

🟢 Tudo verde: Parabéns, o sistema está aprovado!

🔴 Algo vermelho: O teste encontrou um bug ou falha na aplicação.

Projeto desenvolvido para demonstração de práticas de BDD e Automação de Testes.
