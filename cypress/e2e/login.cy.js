// Test cases for login page
import 'cypress-if';
import { Then } from '@badeball/cypress-cucumber-preprocessor';
import Login from '../pom/Login';
import PromotionModal from '../pom/PromotionModal';

Then('I click the Email tab', () => {
  PromotionModal.closeIfVisible();
  Login.tabEmail().click();
});

Then('I input email {string}', (email) => {
  Login.textFieldEmail().type(email);
});

Then('I input password {string}', (password) => {
  Login.textFieldPassword().type(password);
});

Then('I click the login button', () => {
  Login.buttonSubmit().click();
});

Then('I am shown the appropriate error', () => {
  Login.textInvalidCredential({ timeout: 8000 }).should('be.visible');
});
