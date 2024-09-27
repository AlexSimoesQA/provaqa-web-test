import { USER, INVALID_CREDENTIALS } from '../fixtures/constLogin'

describe('Login page tests', () => {

    beforeEach(() => {
        cy.visit('/desafioqa/')
    })

    it('Successful authentication with valid credentials', () => {
        cy.loginProvaqa(USER.username, USER.password)
        cy.validateWelcomeText()
    })

    it('Failed authentication with invalid username', () => {
        cy.loginProvaqa(INVALID_CREDENTIALS.username, USER.password)
        cy.validateInvalidCredentialsText()
    })

    it('Failed authentication with invalid password', () => {
        cy.loginProvaqa(USER.username, INVALID_CREDENTIALS.password)
        cy.validateInvalidCredentialsText()
    })

    it('Failed authentication with invalid credentials', () => {
        cy.loginProvaqa(INVALID_CREDENTIALS.username, INVALID_CREDENTIALS.password)
        cy.validateInvalidCredentialsText()
    })

})