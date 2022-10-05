describe('Backend Login authentication', () => {
    it('Get Token', () => {
        cy.request({
            method: 'POST',
            url: Cypress.env('backend_login_url'),
            body: {"email":Cypress.env('existing_test_user_email'), "password":Cypress.env('existing_test_user_password')},
        }).then((res) => {
            // Set the cookie value
            cy.setCookie("auth._refresh_token.laravelJWT", res.body.token);
        });

        // Assert login successful by checking for existence of cookie
        cy.getCookie("auth._refresh_token.laravelJWT").should("exist");
    })

})