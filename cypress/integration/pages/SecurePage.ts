export class SecurePage {
  path = "/secure";

  messageDiv = "div[id='flash']";

  getMessage() {
    return cy.get(this.messageDiv).invoke("text");
  }
}

const securePage = new SecurePage();

export default securePage;
