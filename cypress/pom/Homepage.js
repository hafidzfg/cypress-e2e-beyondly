export default class Homepage {
  static imgBannerMain() {
    return cy.get('img[alt="banner-pict"]');
  }
  static buttonNext() {
    return cy.get('button[class="slick-arrow slick-next"]');
  }
  static buttonPrevious() {
    return cy.get('button[class="slick-arrow slick-prev"]');
  }
  static buttonCloseWa() {
    return cy.get('button[aria-label="Close"]');
  }
  static textWa() {
    return cy.contains('Kamu bisa menghubungi kami via whatsapp');
  }
  static linkSvgWa() {
    return cy.get('[href="https://wa.me/6285934847324"]').children('svg');
  }
  static slickDotsContainer() {
    return cy.get('ul.slick-dots');
  }
  static dotItems() {
    return this.slickDotsContainer().children('li');
  }
  static activeDot() {
    return this.slickDotsContainer().children('li.slick-active');
  }
}
