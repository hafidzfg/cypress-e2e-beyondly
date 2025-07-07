export default class Header {
  static textWelcome() {
    return cy.contains('Selamat datang di Beyondly!');
  }
  static linkPusatBantuan() {
    return cy.get('[href="/help-center"]');
  }
  static imgBeyondly() {
    return cy.get('[class="brand-logo"]').find('img');
  }
  static linkTentangKami() {
    return cy.get('[href="/about-us"]');
  }
  static linkProduk() {
    return cy.get('[class="brand-logo"]').find('[id="toggle-nav-menu-title"]');
  }
  static linkKuisPersonalisasi() {
    return cy.contains('Kuis Personalisasi');
  }
  static imgKuisPersonalisasi() {
    return cy.contains('Kuis Personalisasi').prev('img');
  }
  static buttonLogin() {
    return cy.get('[href="/login"]');
  }
  static buttonRegister() {
    return cy.get('button[id="daftar-reseller-navbar"]');
  }
}
