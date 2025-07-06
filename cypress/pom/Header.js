export default class Header {
  static loginButton() {
    return cy.get('[href="/login"]');
  }
}
