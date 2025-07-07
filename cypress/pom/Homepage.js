export default class Homepage {
  // Main banner section
  static imgBannerMain() {
    return cy.get('img[alt="banner-pict"]');
  }
  static buttonNext() {
    return cy.get('button[class="slick-arrow slick-next"]').first();
  }
  static buttonPrevious() {
    return cy.get('button[class="slick-arrow slick-prev"]').first();
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
  // Explanation below main banner
  static containerExplanation() {
    return cy.get('[class*="explanation-tab_about-container"]');
  }
  static containerExplanationAnimation() {
    return this.containerExplanation().children('[class*="animate"]');
  }
  static imgLogoBeyondly() {
    return cy.get('[class*="explanation-tab_header"]').children('img');
  }
  static textBeyondly() {
    return cy.get('[class*="explanation-tab_header-text"]');
  }
  static textExplanationTitle() {
    return cy.get('[class*="explanation-tab_p-1"]');
  }
  static textExplanationParagraph() {
    return cy.get('[class*="explanation-tab_p-2"]');
  }
  // Showcase slider section
  static containerShowcase() {
    return cy.get('[class*="explanation-tab_about-container"').next('div.row');
  }
}
