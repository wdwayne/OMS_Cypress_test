describe('Approval Queue tab', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('BASEURL'));
    cy.get('#email').should('exist').type(Cypress.env("USERNAME"));
    cy.get('#password').should('exist').type(Cypress.env("PASSWORD"));
    cy.contains('button', 'SIGN IN').click();
  })

  it("should navigate to the Approval queue and search by buy orders", () => {
    cy.contains('li', 'Approval Queue').should('be.visible').click();
    cy.get('[data-target="#collapseOne"]').should('be.visible').click();
    cy.get('#SelectedOrderAction').select('1').should('have.value', '1');
    cy.get('#findBtn').should('exist').click();
    // SelectedOrderAction
  })
  it("should navigate to the Approval queue and search by sell orders", () => {
    cy.contains('li', 'Approval Queue').should('be.visible').click();
    cy.get('[data-target="#collapseOne"]').should('be.visible').click();
    cy.get('#SelectedOrderAction').select('2').should('have.value', '2');
    cy.get('#findBtn').should('exist').click();
  })
  it('should search for orders by CIF number', ()=> {
    cy.contains('li', 'Approval Queue').should('be.visible').click();
    cy.get('[data-target="#collapseOne"]').should('be.visible').click();
    cy.get('#Client').should('be.visible').type(Cypress.env('CIF'));
    cy.get('#findBtn').should('exist').click();
  })
  it('should search for orders by JCSD number', ()=> {
    cy.contains('li', 'Approval Queue').should('be.visible').click();
    cy.get('[data-target="#collapseOne"]').should('be.visible').click();
    cy.get('#Client').should('be.visible').type(Cypress.env('JCSD'));
    cy.get('#findBtn').should('exist').click();
  })
  it('should search for orders by JCSD number', ()=> {
    cy.contains('li', 'Approval Queue').should('be.visible').click();
    cy.get('[data-target="#collapseOne"]').should('be.visible').click();
    cy.get('#OrderId').should('be.visible').type(Cypress.env('ORDERID'));
    cy.get('#findBtn').should('exist').click();
  })
  it('should search for orders by user name', ()=> {
    cy.contains('li', 'Approval Queue').should('be.visible').click();
    cy.get('[data-target="#collapseOne"]').should('be.visible').click();
    cy.get('#usersddl').select(Cypress.env('USER'));
    cy.get('#findBtn').should('exist').click();
  })
  it('should search for orders by symbal', ()=> {
    cy.contains('li', 'Approval Queue').should('be.visible').click();
    cy.get('[data-target="#collapseOne"]').should('be.visible').click();
    cy.get('#symbolsddl').select('SELECTF', { force: true });
    cy.get('#findBtn').should('exist').click();
  })
  // symbolsddl
})