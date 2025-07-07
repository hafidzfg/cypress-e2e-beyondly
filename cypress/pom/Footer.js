export default class Footer {
  static sectionFooter() {
    return cy.get('footer').children('section');
  }
  static footerPartition() {
    return cy.get('[class^="footer-theme partition"]');
  }
  //
  static imgLogo() {
    return cy.get('img[src="/assets/images/icon/logo-beyondly-white.png"]');
  }
  static firstContactIconBackground() {
    return cy.get('a[class^="styles_background-icon"]').first();
  }
  static firstContactIcon() {
    return this.firstContactIconBackground().children('svg');
  }
  static firstContactTypeText() {
    return cy.get('p[class^="styles_contact-type"]').first();
  }
  static firstContactValue() {
    return cy.get('p[class^="styles_contact-value"]').first();
  }
  static secondContactIconBackground() {
    return cy.get('a[class^="styles_background-icon"]').eq(1);
  }
  static secondContactIcon() {
    return this.secondContactIconBackground().children('svg');
  }
  static secondContactTypeText() {
    return cy.get('p[class^="styles_contact-type"]').eq(1);
  }
  static secondContactValue() {
    return cy.get('p[class^="styles_contact-value"]').eq(1);
  }
  static footerTitleProduk() {
    return cy.get('.footer-title').eq(0);
  }
  static footerProdukList() {
    return this.footerTitleProduk().next().find('ul');
  }
  static footerProdukListItem() {
    return this.footerProdukList().children('li');
  }
  static footerProdukListLink(index) {
    return this.footerProdukListItem().children('a').eq(index);
  }
}
