import { USER } from '../fixtures/constLogin'
import { CUSTOMER, BALANCE, toReais } from '../fixtures/customers'

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
        cy.navigateToCustomerList()
        cy.searchForName(CUSTOMER.name)
        cy.validateBalanceDeduction(toReais(CUSTOMER.balance), toReais(CUSTOMER.balance))
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
        cy.typeTransactionValue(BALANCE.oneCent)
        cy.clickSave()
        cy.validateSuccessTransactionText()
        cy.navigateToCustomerList()
        cy.searchForName(CUSTOMER.name)
        cy.validateBalanceDeduction(toReais(CUSTOMER.balance), toReais(BALANCE.oneCent))
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