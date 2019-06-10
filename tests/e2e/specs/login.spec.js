describe('testing Login Page Form', ()=>{
    context('with test', ()=>{
        it('check login-from renderging', ()=>{
            cy.visit('http://localhost:8081/login')
            cy.get('.pg-login').should('have.length', 2)
        })
    })
    
    context('with proper way', ()=>{
        it.only('type id, pw', ()=>{
            cy.visit('http://localhost:8081/login')
            cy.get('.pg-login-form')
                .find('.form-id').type('guardian{enter}')
            cy.get('.pg-login-form')
                .find('.form-pw').type('guardian{enter}')
            cy.get('.pg-login-form').contains('Login').click()
        })
    })
})