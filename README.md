# App + Cypress + BDD + Jenkins

Esse projeto serve para testar o [Cypress](https://www.cypress.io/) com BDD + uma aplicação criada com [CRA](https://create-react-app.dev/) no pipeline do [Jenkins](https://www.jenkins.io/).

## Jenkins

Foi necessário criar uma imagem docker customizada do jenkins para instalar as dependências linux que o cypress requer.

Dentro do jenkins foi adicionado e configurado dois plugins

- NodeJS
- AnsiColor (Corrige a saída do console)

Para criar o container do jenkins, acesse a pasta docker pelo terminal e execute:

```
docker-compose -f docker-compose.yml up
```

## Estrutura de pastas do Cypress

- **fixtures** - Arquivos json para os dados mockados.

- **integration/features** - Arquivos com os cenários de teste escritos no formato BDD.

- **integration/pages** -
  A ideia do padrão page objects é a de criarmos um arquivo para cada página ou fluxo do site. Dessa forma, mantemos a organização e facilitamos a manutenção do código, pois colocamos no arquivo os comandos que são executados na página/fluxo correspondentes ao nome do arquivo.
  Ex.: HomePage.ts, PdpPage.ts, Checkout.ts.

- **support/step_definitions** - Testes desenvolvidos em javascript, que devem refletir o que foi adicionado em integration/features.

- **support/commands.ts** - Comandos customizados que serão utilizados globalmente, como por exemplo a função de login.

- **support/e2e.ts** - Arquivo que executa antes de todos os testes, local onde é importado os comandos.

- **cypress.config.ts** - Neste arquivo podemos realizar configurações globais do nosso projeto. Ex.: criar variáveis globais, definir resolução do navegador, setar uma URL padrão, configurar o cucumber, entre outras.

## BDD

[Testes automatizados com Cypress e Cucumber](https://cwi.com.br/blog/testes-automatizados-cypress-e-cucumber/)

## Dependências

- **@badeball/cypress-cucumber-preprocessor** - Lib para trabalhar com o cucumber
- **@bahmutov/cypress-esbuild-preprocessor** - Necessário para o esbuild funcionar com o cucumber
- **cypress** - Lib da ferramenta cypress
- **eslint-plugin-cypress** - Plugin eslint sugerido na documentação do cypress
- **start-server-and-test** - Espera pela execução da aplicação antes de executar o script do cypress
- **dotenv** - Permite acessar no cypress.config.ts as variáveis de ambiente dos arquivos .env
- **typescript** - Necessário para utilizar o cypress com Typescript

## Scripts

- **cy:open** - Abre a interface do Cypress
- **cy:run** - Executa o cypress no modo headless, não abrindo interface alguma.
- **cy:ci** - Comando utilizado para continuos integration(CI).
  Executa BROWSER=none para quando o start do CRA for executado, não tentar abrir o navegador. Depois executa start-server-and-test combinado com o comando start do CRA + a url que ele irá aguardar para então poder executar cy:run.
