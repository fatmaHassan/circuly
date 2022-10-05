// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/*Cypress.Commands.add(
    'loginByAuth0Api',
    () => {

        cy.request({
            method: 'POST',
            url: Cypress.env('backend_login_url'),
            body: {"email":Cypress.env('existing_test_user_email'), "password":Cypress.env('existing_test_user_password')},
        }).then((res) => {
            // If successful, check to make sure usernames match

            // Set the cookie value for dolthubToken
            cy.setCookie("auth._refresh_token.laravelJWT", res.body.token);
            window.localStorage.setItem('auth0Cypress', JSON.stringify(item))

            cy.visit('/')
        })
    }
)*/