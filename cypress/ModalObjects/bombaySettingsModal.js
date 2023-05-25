class bombaySettingsModal {
  changeUserNickname(newNickname) {
    cy.getIFrameBody().as('iframe')
    cy.get('@iframe').find('[data-test-id="button-click-edit-username-in-settings"]').eq(0).should('be.visible').click()
    cy.get('@iframe').find('[data-test-id="entry-username-input"]').should('be.visible').clear().type(newNickname)
    cy.get('@iframe').find('[data-test-id="button-click-edit-username-in-settings"]').should('be.visible').eq(0).click()
    cy.get('@iframe').find('[data-test-id="menu-link-close"]').eq(0).should('be.visible').click()
    cy.iframe().get('[data-test-id="navigation-page_scrollable_container"]').should('not.exist')
  }
  checkUserChangedNickname(changedNickname) {
    cy.getIFrameBody().as('iframe')
    cy.get('@iframe').find('.current-username').contains(changedNickname)
  }
}
export default bombaySettingsModal