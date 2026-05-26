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

🚀 Como executar este projeto?
Siga estes 3 passos simples no seu terminal para colocar a automação para rodar:

Passo 1: Clone o repositório

Bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
cd SEU_REPOSITORIO
Passo 2: Instale as dependências

Bash
npm install
Passo 3: Execute os testes

Bash
npm run test:bdd
💡 O que acontece ao executar?
Ao rodar o comando, o navegador será aberto automaticamente. Você verá o teste interagindo com o site em tempo real (digitando, clicando e navegando). Ao final, o terminal apresentará o resultado da execução:

🟢 Tudo verde: O sistema está aprovado e estável.

🔴 Algo em vermelho: O teste identificou uma falha ou bug na aplicação.

Projeto desenvolvido para demonstração de automação de testes utilizando práticas de BDD.
