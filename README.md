# Cypress E2E Testing - Ecommerce test app

This repository contains end-to-end (E2E) test automation using [Cypress](https://www.cypress.io/) for the Beyondly web application. It covers login scenarios using behavior-driven development (BDD), applying the Page Object Model (POM), GitHub Actions for CI, and optional integration with Cypress Cloud for test recording.

---

## 📦 Prerequisites

- Node.js (v18+ recommended)
- npm (v9+)
- Chrome / Chromium (for local testing)
- Access to the test environment (e.g., `https://recruitment-staging-queenbee.paradev.io`)
- [Cypress Cloud account](https://cloud.cypress.io/) (optional)

---

## 🔧 Setup

1. **Install dependencies**

   ```bash
   npm ci
   ```

2. **Run tests locally**

   ```bash
   # Run all specs
   npx cypress run

   # Run only BDD specs
   npm run run:e2e
   ```

3. **Open Cypress Test Runner (GUI)**
   ```bash
   npx cypress open
   ```

---

## 🧱 Project Structure

```
cypress/
├── e2e/                  # BDD test specs in .feature files
├── pom/                  # Page Object Models for modular interaction
│   ├── loginPage.js
│   └── promotionModal.js
├── support/              # Custom commands and test lifecycle hooks
│   ├── commands.js
│   └── e2e.js
```

---

## ✍️ Key Concepts

### ✅ Page Object Model (POM)

Encapsulates page selectors and behaviors to improve maintainability and reuse. For example, element selectors are inside `/cypress/pom/*.js`

### ✅ Behavior-Driven Development (BDD)

Uses `.feature` files with Gherkin syntax via [Cypress Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) to define tests in a human-readable format.

### ✅ GitHub Actions

Configured to run tests on call `.github/workflows/*.yml`.

### ✅ Trial Cypress Cloud Integration

Test runs can optionally be recorded to [Cypress Cloud](https://cloud.cypress.io/) for improved visibility and debugging support.

---

## 🔐 GitHub Actions Environment Variables

If you're using Cypress Cloud, define the following repository secrets:

- `CYPRESS_PROJECT_ID`
- `CYPRESS_RECORD_KEY`

These can be set via GitHub → Settings → Secrets and variables → Actions.

---

## 🧪 Test Results

- Screenshots for failed tests are saved in `cypress/screenshots/`
- Videos (if enabled) are saved in `cypress/videos/`
- Cypress Cloud also provides rich debugging tools, if integrated

---

## 📬 Maintainer

Created and maintained by [@hafidzfg](https://github.com/hafidzfg). Contributions and suggestions are welcome.

## Ideas

- More test cases
- Workflows for push & pull requests
- Proper branching strategy and branch protection
