import './page-objects/login'
import './page-objects/includeCustomerPage'
import './page-objects/homePage'
import './page-objects/includeTransactionPage'
import './page-objects/customerListPage'
import 'cypress-real-events/support'

Cypress.on('fail', (error) => {
    debugger
    throw error
})