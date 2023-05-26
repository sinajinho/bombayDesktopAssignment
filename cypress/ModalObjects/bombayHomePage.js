class bombayHomePage {
  generateRandomNickname() {
    cy.getIFrameBody().as('iframe')
    cy.get('#iframeId').its('0.contentDocument.body').then(cy.wrap).find('[data-test-id="username-popup"]').within(() => {
      cy.get('[data-test-id="generate-username-button"]').should('be.visible').click()
      cy.get('[data-test-id="save-username-button"]').should('be.visible').click()
      cy.get('@iframe').find('[data-test-id="username-popup"]').should('not.exist')
    })
  }
  openSettingsModal() {
    cy.getIFrameBody().as('iframe')
    cy.get('@iframe').find('[data-test-id="button-click-open-menu-modal"]').should('be.visible').click()
    cy.get('@iframe').find('[data-test-id="menu-link-settings"]').eq(1).should('be.visible').click()
  }
  joinFeaturedGameTable(userBalance, userTotalBet) {
    cy.getIFrameBody().as('iframe')
    cy.get('@iframe').find('[data-test-id="button-click-join-table-button"]').eq(0).should('be.visible').click()
    cy.get('@iframe').find('[data-test-id="balance-info-balance"]').should('be.visible').contains(userBalance)
    cy.get('@iframe').find('[data-test-id="balance-info-totalbet"]').should('be.visible').contains(userTotalBet)
    cy.get('@iframe').find('[data-test-id="balance-info-roundId"]').should('be.visible')
  }
}
export default bombayHomePage