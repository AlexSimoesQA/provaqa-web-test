import { USER } from '../fixtures/constLogin'
import { CUSTOMER } from '../fixtures/customers'

describe('Include transaction page tests', () => {

    beforeEach(() => {
        cy.visit('/desafioqa/')
        cy.loginProvaqa(USER.username, USER.password)
        cy.navigateToCustomerList()
        cy.clickCleanBase()
    })

    it('Purchase possible with amount equal to balance', () => {
        cy.navigateToIncludeCustomer()
        cy.typeName(CUSTOMER.name)
        cy.typeCpf(CUSTOMER.cpf)
        cy.typeStatus(CUSTOMER.status)
        cy.typeCustomerBalance(CUSTOMER.balance)
        cy.clickSave()
        cy.wait(2000)

        cy.navigateToIncludeTransaction()
        cy.selectCustomer(CUSTOMER.name)
        cy.typeTransactionValue(CUSTOMER.balance)
        cy.clickSave()
        cy.validateSuccessTransactionText()
    })

    it('Purchase possible with amount less than balance', () => {
        cy.navigateToIncludeCustomer()
        cy.typeName(CUSTOMER.name)
        cy.typeCpf(CUSTOMER.cpf)
        cy.typeStatus(CUSTOMER.status)
        cy.typeCustomerBalance(CUSTOMER.balance)
        cy.clickSave()
        cy.wait(2000)

        cy.navigateToIncludeTransaction()
        cy.selectCustomer(CUSTOMER.name)
        cy.typeTransactionValue('1')
        cy.clickSave()
        cy.validateSuccessTransactionText()
    })

    it('Purchase not possible with amount greater than balance', () => {
        cy.navigateToIncludeCustomer()
        cy.typeName(CUSTOMER.name)
        cy.typeCpf(CUSTOMER.cpf)
        cy.typeStatus(CUSTOMER.status)
        cy.typeCustomerBalance(CUSTOMER.balance)
        cy.clickSave()
        cy.wait(2000)

        cy.navigateToIncludeTransaction()
        cy.selectCustomer(CUSTOMER.name)
        cy.typeTransactionValue('10001')
        cy.clickSave()
        cy.validateSuccessAlertNotBeVisible()
    })

})