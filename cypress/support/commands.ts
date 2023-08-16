// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPage from "../integration/pages/LoginPage";

Cypress.Commands.add("login", (username: string, password: string) => {
  cy.session(
    [username, password],
    () => {
      LoginPage.visitLogin();
      LoginPage.typeUsername(username);
      LoginPage.typePassword(password);
      LoginPage.clickLogin();
      // cy.location('pathname').should('eq', '/')
    },
    {
      cacheAcrossSpecs: true, // Reduz o tempo dos testes, pois mantém o mesmo login entre todos os testes, evitando que seja executado de novo.
    }
  );
});
