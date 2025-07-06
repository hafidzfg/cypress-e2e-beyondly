// @ts-nocheck

const { defineConfig, globalIgnores } = require('eslint/config');
const pluginCypress = require('eslint-plugin-cypress');
const js = require('@eslint/js');

module.exports = defineConfig([
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest'
    },
    plugins: {
      js,
      cypress: pluginCypress
    },
    rules: {
      semi: ['error', 'always'],
      'cypress/no-assigning-return-values': 'warn',
      'cypress/no-unnecessary-waiting': 'error',
      'cypress/assertion-before-screenshot': 'warn',
      'cypress/no-force': 'warn',
      'cypress/no-pause': 'error'
    }
  },
  globalIgnores(['node_modules/*', 'cypress.config.js', 'videos/', 'screenshots/', 'package.json', 'package-lock.json'])
]);
