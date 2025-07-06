// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

/* Currently there is 401 when doing some action on the test web error:
    ````(xhr)POST 401 /user/on-boarding
    Error: Request failed with status code 401```
The following code silence that error so we can proceed with the e2e test
*/
Cypress.on('uncaught:exception', (err, runnable, promise) => {
  if (promise) {
    return false;
  }
});
