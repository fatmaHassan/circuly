const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://cms-frontend-qa-test-3zooss7v1.herokuapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "env": {
    "user_login_url": "/auth/login",
    "backend_login_url": "/api/auth/login",
    "dashboard_url": "/cms/insights",
    "customers_url": "/cms/customers",
    "existing_test_user_email": "qa@circuly.io",
    "existing_test_user_password": "test1234"
  }
});
