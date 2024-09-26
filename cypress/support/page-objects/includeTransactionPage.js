Cypress.Commands.add('selectCustomer', (name) => {
    cy.get('#cliente').select(name)
})

Cypress.Commands.add('typeTransactionValue', (value) => {
    cy.get('#valorTransacao').type(value)
})

Cypress.Commands.add('validateSuccessTransactionText', () => {
    cy.get('#alertMessage').should('contain', 'Venda realizada com sucesso')
})

Cypress.Commands.add('validateSuccessAlertNotBeVisible', () => {
    cy.get('#alertMessage').should('not.be.visible')
})