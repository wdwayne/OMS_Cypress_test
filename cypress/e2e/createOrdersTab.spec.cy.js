describe('Create orders tab', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('BASEURL'));
      cy.get('#email').should('exist').type(Cypress.env("USERNAME"));
      cy.get('#password').should('exist').type(Cypress.env("PASSWORD"));
      cy.contains('button', 'SIGN IN').click();
    })
    it('Should navigate to the create orders tab', () => {
      cy.contains('li', 'Create Order').should('exist').click();
      cy.url().should('include', '/Order/Create');
    })
})