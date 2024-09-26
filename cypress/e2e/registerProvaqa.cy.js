import { USER } from '../fixtures/constLogin'
import { CUSTOMER, INACTIVE } from '../fixtures/customers'

describe('Tests of include customer page', () => {

    beforeEach(() => {
        cy.visit('/desafioqa/')
        cy.loginProvaqa(USER.username, USER.password);
        cy.navigateToCustomerList()
        cy.clickCleanBase()
    })

    it('Register a new customer', () => {
        cy.navigateToIncludeCustomer()
        cy.typeName(CUSTOMER.name)
        cy.typeCpf(CUSTOMER.cpf)
        cy.typeStatus(CUSTOMER.status)
        cy.typeCustomerBalance(CUSTOMER.balance)
        cy.clickSave()
        cy.validateCustomerSuccessAlert()
    })

    it('Name field is required', () => {
        cy.navigateToIncludeCustomer()
        cy.typeCpf(CUSTOMER.cpf)
        cy.typeStatus(CUSTOMER.status)
        cy.typeCustomerBalance(CUSTOMER.balance)
        cy.clickSave()
        cy.validateNameIsRequired()
    })

    it('Cpf field is required', () => {
        cy.navigateToIncludeCustomer()
        cy.typeName(CUSTOMER.name)
        cy.typeStatus(CUSTOMER.status)
        cy.typeCustomerBalance(CUSTOMER.balance)
        cy.clickSave()
        cy.validateCpfIsRequired()
    })

    it('Status field is required', () => {
        cy.navigateToIncludeCustomer()
        cy.typeName(CUSTOMER.name)
        cy.typeCpf(CUSTOMER.cpf)
        cy.typeCustomerBalance(CUSTOMER.balance)
        cy.clickSave()
    })

    it('Balance field is required', () => {
        cy.navigateToIncludeCustomer()
        cy.typeName(CUSTOMER.name)
        cy.typeCpf(CUSTOMER.cpf)
        cy.typeStatus(CUSTOMER.status)
        cy.clickSave()
        cy.validateBalanceIsRequired()
    })

})