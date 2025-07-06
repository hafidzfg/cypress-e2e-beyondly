export default class PromotionModal {
  static promotionCloseButton() {
    return cy.get('[id="chakra-modal--header-1"]').children('svg');
  }
}
