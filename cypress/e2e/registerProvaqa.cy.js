import { USER } from '../fixtures/constLogin'
import { CUSTOMER, INACTIVE } from '../fixtures/customers'

describe('QA Challenge', () => {

    beforeEach(() => {
        cy.visit('/desafioqa/')
        cy.loginProvaqa(USER.username, USER.password);
    })

    afterEach(() => {
        cy.navigateToCustomerList()
        cy.clickCleanBase()
    })

    it('Register a new client', () => {
        cy.navigateToIncludeCustomer()
        cy.typeName(CUSTOMER.name)
        cy.typeCpf(CUSTOMER.cpf)
        cy.typeStatus(CUSTOMER.status)
        cy.typeCustomerBalance(CUSTOMER.balance)
        cy.clickSave()
        cy.validateCustomerSuccessAlert()
    })

})