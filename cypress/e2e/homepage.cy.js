import 'cypress-if';
import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import PromotionModal from '@pom/PromotionModal';
import Header from '@pom/Header';
import Homepage from '@pom/Homepage';

const BASE_URL = Cypress.env('e2e').baseUrl;

Given('As a user I open the homepage', () => {
  cy.viewport(1366, 768);
  cy.visit(Cypress.env('e2e').baseUrl);
  // handling if shown promotion modal
  PromotionModal.closeIfVisible();
  // PromotionModal.promotionCloseButton().should('not.visible');
});

Then('I click the Masuk button', () => {
  Header.buttonLogin().click();
  cy.url().should('eq', `${BASE_URL}/login`);
});

Then('I am shown the valid homepage details', () => {
  // Verify header section
  Header.textWelcome().should('be.visible');
  Header.linkPusatBantuan().should('be.visible');
  Header.imgBeyondly().should('be.visible');
  Header.linkTentangKami().should('be.visible');
  Header.linkProduk().should('be.visible');
  Header.linkKuisPersonalisasi().should('be.visible');
  Header.imgKuisPersonalisasi().should('be.visible');
  Header.buttonLogin().should('be.visible');
  Header.buttonRegister().should('be.visible');
  // Verify content section
  // Main banner
  Homepage.imgBannerMain().should('be.visible');
  Homepage.buttonNext().should('be.visible');
  Homepage.buttonPrevious().should('be.visible');
  Homepage.buttonCloseWa().should('be.visible');
  Homepage.textWa().should('be.visible');
  Homepage.linkSvgWa().should('be.visible');
  Homepage.slickDotsContainer().should('be.visible');
  Homepage.dotItems().should('be.visible').and('have.length', 4);
  Homepage.activeDot().should('be.visible').and('have.length', 1);
  // Explanation section
  Homepage.containerExplanation().scrollIntoView({ offset: { top: -200 } }, { duration: 2000 });
  Homepage.imgLogoBeyondly().should('be.visible');
  Homepage.textBeyondly().should('be.visible').and('have.text', '#ToLiveBeyond');
  Homepage.textExplanationTitle().should('be.visible').and('have.text', 'Transform Yourself to be a Better You');
  Homepage.textExplanationParagraph()
    .should('be.visible')
    .and(
      'have.text',
      "Beyondly doesn’t just fit into your life—it elevates it, effortlessly. It's woven into the way you live, work, and move through the day. At Beyondly, we believe wellness is not a destination. It is in every breath, every choice, and every movement, so you can live fully, breathe freely, and move with clarity."
    );
  // Verify footer section
});
