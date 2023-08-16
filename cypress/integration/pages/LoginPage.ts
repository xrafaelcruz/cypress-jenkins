export class LoginPage {
  path = "/login";

  usernameInput = "input[id='username']";
  passwordInput = "input[id='password']";
  loginButton = "button[type='submit']";

  visitLogin() {
    cy.visit(this.path);
  }

  typeUsername(username: string) {
    cy.get(this.usernameInput).type(username);
  }

  typePassword(password: string) {
    cy.get(this.passwordInput).type(password);
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }
}

const loginPage = new LoginPage();

export default loginPage;
