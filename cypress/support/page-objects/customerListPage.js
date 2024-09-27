Cypress.Commands.add('clickCleanBase', () => {
    cy.get('[title="QA"]').realHover()
    cy.get('[title="Clientes"]').should('be.visible').realHover()
    cy.get('[title="Listar"]').should('be.visible').click()
    cy.get('input[value="Limpar Base"]').click()
    cy.get('#alertMessage').should('contain', 'Base Limpa com sucesso')
})

Cypress.Commands.add('searchForName', (name) => {
    cy.get('input[name="j_idt17"]').type(name)
    cy.get('input[value="Pesquisar"]').click()
})

Cypress.Commands.add('validateBalanceDeduction', (balance, transactionValue) => {
    cy.get('tr.success td').eq(2).invoke('text').then((value) => {
        const customerBalance = parseFloat(value.replace('R$', '').trim().replace(',', '.'))
        const expectedValue = balance - transactionValue

        expect(customerBalance).to.eq(expectedValue)
    });
})