export default class PromotionModal {
  static modalContainer() {
    return cy.get('[class*="chakra-modal__content-container"]');
  }

  static promotionCloseButton() {
    return this.modalContainer()
      .find('[id="chakra-modal--header-1"]')
      .children('svg');
  }

  static closeIfVisible() {
    cy.get('body').then(($body) => {
      const modalExists =
        $body.find('[class*="chakra-modal__content-container"]').length > 0;
      if (modalExists) {
        this.promotionCloseButton().should('be.visible').click();
      }
    });
  }
}
