# CAC-TAT
Projeto desenvolvido durante o curso de Cypress do Zero à Nuvem. O objetivo principal é praticar os conceitos aprendidos no curso, incluindo testes de interface, testes de API, testes mobile, integração contínua, etc.

## Para rodar precisa ter:
- [Node.js](https://nodejs.org) instalado na máquina (utilizei a versão 20.17.0)
- [Gerenciador de pacotes npm](https://www.npmjs.com) (utilizei a versão 10.8.2)
- [Cypress](https://cypress.io) instalado (utilizei a versão 13.12.0)
- [Editor de código](https://code.visualstudio.com) (utilizei o Visual Studio Code)

## Instalação e inicialização
1. Clone o repositório do projeto:
    git clone
    cd cypress-do-zero-a-nuvem
2. Instale as dependências do projeto:
    npm install
3. Abra o Cypress:
    npx cypress open
4. Execute os testes conforme necessário.
5. Para executar os testes em modo headless com configuração mobile, digite o seguinte no terminal:
    npm run cy:test:mobile:headless
6. Para executar os testes em modo interativo com configuração mobile, digite o seguinte no terminal:
    npm run cy:test:mobile

## Arquivos
- cypress/
  - e2e/ - Contém os arquivos de teste.(end to end)
  - fixtures/ - Contém os dados de teste.
  - support/ - Contém comandos personalizados e configurações do Cypress.(comandos)
- package.json - Arquivo de configuração do npm.
- README.md - Este arquivo de documentação.

