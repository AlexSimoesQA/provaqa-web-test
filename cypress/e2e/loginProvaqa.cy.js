import { USER, INVALID_USERNAME, INVALID_PWD, INVALID_CREDENTIALS } from '../fixtures/constLogin'

describe('Login page tests', () => {

    beforeEach(() => {
        cy.visit('/desafioqa/')
    })

    it('Successful authentication with valid credentials', () => {
        cy.loginProvaqa(USER.username, USER.password)
        cy.validateWelcomeText()
    })

    it('Failed authentication with invalid username', () => {
        cy.loginProvaqa(INVALID_USERNAME.username, INVALID_USERNAME.password)
        cy.validateInvalidCredentialsText()
    })

    it('Failed authentication with invalid password', () => {
        cy.loginProvaqa(INVALID_PWD.username, INVALID_PWD.password)
        cy.validateInvalidCredentialsText()
    })

    it('Failed authentication with invalid credentials', () => {
        cy.loginProvaqa(INVALID_CREDENTIALS.username, INVALID_CREDENTIALS.password)
        cy.validateInvalidCredentialsText()
    })

})