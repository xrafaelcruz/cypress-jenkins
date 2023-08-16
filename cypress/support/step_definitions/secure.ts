import { Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import SecurePage from "../../integration/pages/SecurePage";

Given("I visit {string}", (route: string) => {
  cy.visit(route);
});

Then("I see {string} message2", (expected: string) => {
  const message = SecurePage.getMessage();
  message.should((actual: string) => {
    expect(actual).to.have.string(expected);
  });
});
