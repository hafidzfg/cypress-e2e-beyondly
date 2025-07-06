export class Login {
  static tabEmail() {
    return cy.get('[id="page-login__tabs-email"]');
  }
  static textFieldEmail() {
    return cy.get('[id="page-login__tabs-email__input-email"]');
  }
  static textFieldPassword() {
    return cy.get('[id="page-login__tabs-email__input-password"]');
  }
  static buttonSubmit() {
    return cy.get('[id="page-login__button-login"]');
  }
  static textInvalidCredential() {
    return cy.get('p').contains('Email atau password salah. Coba ulangi.');
  }
}
