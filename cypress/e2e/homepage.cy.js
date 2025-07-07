import 'cypress-if';
import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import PromotionModal from '@pom/PromotionModal';
import Header from '@pom/Header';
import Homepage from '@pom/Homepage';
import Footer from '@pom/Footer';

const BASE_URL = Cypress.env('e2e').baseUrl;

Given('As a user I open the homepage', () => {
  cy.viewport(1366, 768);
  cy.intercept('**/category/list').as('categoryList');
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
  // Slider showcase section
  Homepage.buttonPrevShowcase().should('be.visible');
  Homepage.buttonNextShowcase().should('be.visible');
  Homepage.visibleSlides().should('be.visible').and('have.length', 5);
  // Showcase content
  Homepage.imgShowcaseContent().should('be.visible');
  Homepage.textShowcase()
    .should('be.visible')
    .and(
      'have.text',
      'Every drop of Beyondly Single Essential Oil delivers countless benefits to enhance your daily wellness experience.\n*dari ParagonCorp.'
    );
  Homepage.textTitleShowcase().should('be.visible').and('have.text', 'Single Essential Oil2');
  Homepage.svgShowcaseBackground().should('be.visible').find('path').should('have.attr', 'fill', '#9bcbde');
  // First container description section
  // Second container description section
  // Third container description section
  // Verify footer section
  Footer.sectionFooter()
    .should('be.visible')
    .and('have.attr', 'style', 'background-color: rgb(1, 83, 82); padding-top: 52px; padding-bottom: 0px;');
  Footer.footerPartition().children().should('have.length', 4);
  Footer.imgLogo().should('be.visible');
  Footer.firstContactIconBackground().should('be.visible');
  Footer.firstContactTypeText().should('be.visible');
  Footer.firstContactIcon().should('be.visible');
  Footer.firstContactValue().should('be.visible').and('have.text', '0859-3484-7324');
  Footer.secondContactTypeText().should('be.visible');
  Footer.secondContactIconBackground().should('be.visible');
  Footer.secondContactIcon().should('be.visible');
  Footer.secondContactValue().should('be.visible').and('have.text', 'hello@beyondlyid.com');
  Footer.footerTitleProduk().should('be.visible').and('have.text', 'Produk');
  // Verify product category list in footer
  cy.wait('@categoryList').then((interception) => {
    const responseBody = interception.response.body;
    const categories = responseBody.data.categories;
    // Verify first 5 shown only
    const categoriesShown = categories.slice(0, 5);
    categoriesShown.forEach((element, index) => {
      const name = element.name;
      Footer.footerProdukListLink(index).should('be.visible').and('have.attr', 'href', '/product-showcase').and('have.text', `${name}`);
    });
  });
});
