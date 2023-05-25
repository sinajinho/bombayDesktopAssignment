class bombayRulesModal {
  verifyRulesCorrectness() {
    cy.getIFrameBody().as('iframe')
    cy.get('@iframe').find('[data-test-id="navigation-page_scrollable_container"]').should('be.visible').within(() => {
      cy.get('.subheader').should('be.visible').contains('Game elements:')
      cy.get('.subheader').should('be.visible').contains('Buttons:')
      cy.get('.subheader').should('be.visible').contains('Auto play:')
      cy.get('.subheader').should('be.visible').contains('Main menu:')
      cy.get('.subheader').should('be.visible').contains('Error Handling:')
      cy.get('.subheader').should('be.visible').contains('Shuffling:')
      cy.get('.subheader').should('be.visible').contains('Disconnection policy')
    })
  }
}
export default bombayRulesModal