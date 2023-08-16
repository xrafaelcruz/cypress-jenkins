import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage from "../../integration/pages/LoginPage";

// Utilizado em diversos cenários de teste
Given("I log in", () => {
  const cpf = Cypress.env("PATIENT_CPF");
  const code = Cypress.env("PATIENT_CODE");

  cy.login(cpf, code);
});

Given("I open Login Page", () => {
  LoginPage.visitLogin();
});

When("I fill the username input with {string}", (username: string) => {
  LoginPage.typeUsername(username);
});

When("I fill the password input with {string}", (password: string) => {
  LoginPage.typePassword(password);
});

When("I click on Login button", () => {
  LoginPage.clickLogin();
});

Then("I see {string} message", (expected: string) => {
  cy.fixture("secure").then((fixture) => {
    expect(expected).to.be.equal(fixture.myText);
  });
});
