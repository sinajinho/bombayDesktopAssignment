module.exports = {
  viewportHeight: 1080,
  viewportWidth: 1920,
  scrollBehavior: 'center',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }, specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}'
  },
};
