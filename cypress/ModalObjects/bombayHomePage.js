class bombayHomePage {
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