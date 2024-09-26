Cypress.Commands.add('validateWelcomeText', () => {
    cy.contains('h1', 'Bem vindo ao Desafio').should('be.visible')
})

Cypress.Commands.add('navigateToCustomerList', () => {
    cy.get('[title="QA"]').realHover()
    cy.get('[title="Clientes"]').should('be.visible').realHover()
    cy.get('[title="Listar"]').should('be.visible').click()
})

Cypress.Commands.add('clickCleanBase', () => {
    cy.get('[title="QA"]').realHover()
    cy.get('[title="Clientes"]').should('be.visible').realHover()
    cy.get('[title="Listar"]').should('be.visible').click()
    cy.get('input[value="Limpar Base"]').click()
    cy.get('#alertMessage').should('contain', 'Base Limpa com sucesso')
})

Cypress.Commands.add('navigateToIncludeTransaction', () => {
    cy.get('[title="QA"]').realHover()
    cy.get('[title="Transações"]').should('be.visible').realHover()
    cy.contains('a[title="Dashboard"]', 'Incluir').should('be.visible').click()
})
