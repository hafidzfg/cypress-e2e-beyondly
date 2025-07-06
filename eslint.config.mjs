import { defineConfig, globalIgnores } from 'eslint/config';
import pluginCypress from 'eslint-plugin-cypress';
import js from '@eslint/js';

export default defineConfig([
  {
    files: ['**/*.js'],
    plugins: {
      js,
      cypress: pluginCypress
    },
    rules: {
      'cypress/no-assigning-return-values': 'warn',
      'cypress/no-unnecessary-waiting': 'error',
      'cypress/assertion-before-screenshot': 'warn',
      'cypress/no-force': 'warn',
      'cypress/no-pause': 'error'
    }
  },
  globalIgnores(['node_modules/*', 'cypress.config.js', 'videos/', 'screenshots/', 'package.json', 'package-lock.json'])
]);
