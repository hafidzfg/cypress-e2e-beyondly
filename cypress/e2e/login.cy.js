// Test cases for login page
import { Then } from '@badeball/cypress-cucumber-preprocessor';
import { Login } from '../pom/Login';

Then('I click the Email tab', () => {
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
  Login.textInvalidCredential().should('be.visible');
});
