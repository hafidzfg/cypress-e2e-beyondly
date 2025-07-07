import 'cypress-if';
import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import PromotionModal from '@pom/PromotionModal';
import Header from '@pom/Header';

const BASE_URL = Cypress.env('e2e').baseUrl;

Given('As a user I open the homepage', () => {
  cy.viewport(1366, 768);
  cy.visit(Cypress.env('e2e').baseUrl);
  // handling if shown promotion modal
  PromotionModal.closeIfVisible();
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
  // Verify footer section
});
