describe('View orders tab', () => {
    beforeEach(() => {
      cy.login(Cypress.env("USERNAME"), Cypress.env("PASSWORD"))
    })
    it('Should navigate to the create orders tab', () => {
      cy.contains('li', 'Orders').should('exist').click();
      cy.url().should('include', '/Order/ListOrder');
    })
})