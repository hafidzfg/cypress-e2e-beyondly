import 'cypress-if';
import { Given } from '@badeball/cypress-cucumber-preprocessor';
import PromotionModal from '../pom/promotionModal';
import Header from '../pom/header';

const BASE_URL = Cypress.env('e2e').baseUrl;

Given('As a user I open the homepage', () => {
  cy.visit(Cypress.env('e2e').baseUrl);

  // handling if shown promotion modal
  PromotionModal.promotionCloseButton().if('visible').click();
  Header.loginButton().click();
  cy.url().should('eq', `${BASE_URL}/login`);
});
