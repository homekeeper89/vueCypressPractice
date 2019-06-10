describe('Test about Register Process', ()=>{
    context('Test proper render', ()=>{
        it('render', ()=>{
            cy.visit('http://localhost:8081/register')
            cy.get('.pg-register-form').children('input').should('have.length', 5)
        })
    })
    context('Test Proper value', ()=>{
        it('Id, pw', ()=>{
            cy.visit('http://localhost:8081/register')
            cy.get('.pg-register-form').find('.DtoId').type('mynewid')
            cy.get('.pg-register-form').as('registerForm')
            cy.get('@registerForm').find('.DtoPw').type('mynewpw')
            cy.get('@registerForm').find('.DtoName').type('mynewname')
            cy.get('@registerForm').find('.DtoPw_re').type('mynewpw')
            cy.get('@registerForm').find('.DtoHobby').type('mynewhobby')

            cy.server()
            cy.route('POST', '/api/posts', {
                'id':'my'
            })
            // cy.route({
            //     methods:'POST',
            //     url: '**/post/**',    // that have a URL that matches '/users/*'
            //     response: [{ id: 1, name: 'Pat' }]  
            // }).as('register')

            cy.get('.pg-register-form').find('.btnSubmit').click()
            // cy.wait('@register')
            // cy.get('.alert').should('contain', 'yes');
        })
    })
})