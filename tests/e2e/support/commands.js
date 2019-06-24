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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('seedAnvVisit', (seedData = 'fixture:todos')=>{
    cy.server()
    cy.route('GET', '/api/todos', seedData)
    cy.visit('/')
})

Cypress.Commands.add('login', ()=>{
    cy.visit('/#/login')
    cy.get('[data-test=email]').type('joe@example.com')
    cy.get('[data-test=password]').type('joe#{enter}')
    cy.hash().should('eq', '#/') // 로그인 된것인지 아는 방법
})