describe('Circuly Test Case', () => {


    beforeEach(() => {

        cy.visit(Cypress.env('user_login_url'))
        cy.get('[data-test-id="field-email"]').type(Cypress.env('existing_test_user_email'))
        cy.get('[data-test-id="field-password"]').type(Cypress.env('existing_test_user_password'))
        cy.get('[data-test-id="form-submit"]').click()

    })

    it('Successful login redirects to dashboard', () => {
        cy.url().should('include', Cypress.env('dashboard_url'));
    })

    it('customer table tests', () => {
        cy.visit(Cypress.env('customers_url'))
        // check that page exists
        cy.url().should('include', Cypress.env('customers_url'));

        // check that customer table has more than 1 row
        cy.get('[data-test-id="pagination-table"]').find('tr').its('length').should('be.gt', 1)

        // search customer table with specific customer email
        cy.get('[data-test-id="table-search"]').type(Cypress.env('existing_test_user_email')).click()
        cy.get('[data-test-id="customer-name"]').click();

        // check that user is redirected to orders page first

        let orderID
        cy.get('[data-test-id="order-id"]').first().invoke('text')
            .then((text) => {
                orderID = text
                cy.log(orderID)
            })
    })
    afterEach(() => {
        cy.clearCookies()
    })
})