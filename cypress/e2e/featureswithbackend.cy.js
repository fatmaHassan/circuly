describe('Auth0', function () {
    beforeEach(function () {

        cy.request({
            method: 'POST',
            url: Cypress.env('backend_login_url'),
            body: {"email":Cypress.env('existing_test_user_email'), "password":Cypress.env('existing_test_user_password')},
        }).then((res) => {
            // If successful, check to make sure usernames match

            // Set the cookie value for dolthubToken
            cy.setCookie("auth._refresh_token.laravelJWT", 'Bearer '+ res.body.token);


            window.localStorage.setItem('auth0Cypress', JSON.stringify(res.body.token))
            cy.visit(Cypress.env('customers_url'))

            // Assert login successful by checking for existence of cookie
            cy.getCookie("auth._refresh_token.laravelJWT").should("exist");
            console.log(cy.getCookie("auth._refresh_token.laravelJWT"));
        });



    })


    it('shows customers', function () {
        cy.request({
            url: Cypress.env('customers_url'),
            headers: {
                'Cookie': 'cookieA=valueA; cookieB=valueB',
            },
        })

        // check that page exists
        cy.url().should('include', Cypress.env('customers_url'));
    })
})