describe('first test', ()=>{
    // it('first login', ()=>{
    //     cy.visit('http://13.209.72.76:8080')
    //     cy.get('[data-cy=userId]').type('guardian')
    //     cy.get('[data-cy=userPw]').type('guardian{enter}')
    //     cy.get('[data-cy=userLogout]').click()
    // })
    beforeEach(function () {
        // alias the users fixtures
        cy.fixture('users/common').as('single_users')
    })
    it.only('관제, 공무원들이 로그인하는 테스트, 아이디당 관제 하나만 있는 사람들', function(){
        cy.visit('http://13.209.72.76:8080')
        for(let u of this.single_users){
            cy.get('[data-cy=userId]').type(u.id)
            cy.get('[data-cy=userPw]').type(u.pw + '{enter}')
            cy.wait(400)
            cy.get('[data-cy=userLogout]').click()
        }
    })
})