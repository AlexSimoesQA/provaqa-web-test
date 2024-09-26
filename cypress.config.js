const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://provaqa.prc.rpe.tech:9080',
    //retries: 2,
    setupNodeEvents(on, config) {
    },
  },
});
