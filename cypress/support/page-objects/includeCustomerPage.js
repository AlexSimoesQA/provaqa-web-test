Cypress.Commands.add('navigateToIncludeCustomer', () => {
    cy.get('[title="QA"]').realHover()
    cy.get('[title="Clientes"]').should('be.visible').realHover()
    cy.get('[title="Incluir"]').should('be.visible').click()
})

Cypress.Commands.add('typeName', (name) => {
    cy.get('#nome').type(name)
})

Cypress.Commands.add('typeCpf', (cpf) => {
    cy.get('#cpf').type(cpf)
})

Cypress.Commands.add('typeStatus', (status) => {
    cy.get('#status').select(status)
})

Cypress.Commands.add('typeCustomerBalance', (customerBalance) => {
    cy.get('#saldoCliente').type(customerBalance)
})

Cypress.Commands.add('clickSave', () => {
    cy.get('#botaoSalvar').click()
})

Cypress.Commands.add('validateCustomerSuccessAlert', () => {
    cy.get('#alertMessage').should('contain', 'Cliente salvo com sucesso')
})