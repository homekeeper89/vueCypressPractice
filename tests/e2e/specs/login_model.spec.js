describe('/login', ()=>{
    beforeEach(()=>{
        cy.visit('/#/login')
    })

    it('greets with Sign in', ()=>{
        cy.consains('h1', 'Sign in')
    })
    it('linkes to #/register', ()=>{
        cy.contains('Need an account?')
        .should('have.attr', 'href', '#/register')
    })
    it('requires email', () =>{
        cy.get('form').contains('Sign in').click()
        cy.get('.error-messages').should('contain', 'email can\'t be blank')
    })
    it('requries password', ()=>{
        cy.get('[data-test=email]').type('joe@example.com{enter}')
        cy.get('.error-messages')
            .should('contain', 'password can\'t be blank')
    })

    it('requries valid user name and password', ()=>{
        cy.get('[data-test=email]').type('joe@exampl.com')
        cy.get('[data-test=password]').type('invalid{enter}')
        cy.get('.error-messages')
            .should('contain', 'email or password is invalid')
    })
    it('navigates to #/ on successful login', ()=>{
        cy.get('[data-test=email]').type('joe@example.com')
        cy.get('[data-test=password]').type('joe#{enter}')
        cy.hash().should('eq', '#/') // 로그인 된것인지 아는 방법
    })
})