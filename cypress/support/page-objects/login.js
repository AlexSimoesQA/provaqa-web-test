Cypress.Commands.add('loginProvaqa', (username, password) => {
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('validateInvalidCredentialsText', (username, password) => {
    cy.contains('label', 'Credenciais inválidas').should('be.visible')
})