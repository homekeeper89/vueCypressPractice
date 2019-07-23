describe('advanced Login', ()=>{
    it('check login menu word', ()=>{
        cy.visit('login')
        cy.get('[data-cy="loginHeadInfo"] p').should(($infos) =>{
              // should have found 3 elements
            expect($infos).to.have.length(4)
            expect($infos.first()).to.contain('Hellow This is Kims Blog')
            expect($infos.eq(1)).to.have.text('WelCome nice o meet you')
            // cy.get('.left-nav>.nav').children().should('have.length', 8)
        })
    })
    it('check when click, wrong msg', ()=>{
        cy.visit('login')
        cy.get('[data-cy="loginBtn"]').click()
        cy.get('[data-cy="loginWordAlert"]').should('contain', 'You should input id, and pw, not blank')
    })
    it('check when click, proper process', ()=>{
        cy.server()
        cy.route(
            'post', 
            '**/users',
            {
            'data':'Yes you are',
            'statusCode': 200
            }
        ).as('postUser')
        
        cy.visit('login')
        cy.get('[data-cy="loginId"]').type('guardian')
        cy.get('[data-cy="loginPw"]').type('guardian')
        cy.get('[data-cy="loginBtn"]').click()
        cy.wait('@postUser');
        // 아래 resAns 는 어떠헥 평가해야하는가.
        cy.get('[data-cy="loginRes"]').should('contain', 'Yes you are').as('resAns')
        cy.wait('@resAns');
    })
    it('check how to use cy.reqest', ()=>{
        cy.request('https://jsonplaceholder.cypress.io/comments').as('comments')
        cy.get('@comments').should((response) => {
        expect(response.body).to.have.length(500)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
        })
        // cy.request('POST', 'http://localhost:8888/users/admin', { name: 'Jane' })
        //     .then((response) => {
        //     // response.body is automatically serialized into JSON
        //     expect(response.body).to.have.property('name', 'Jane') // true
        // })
    })
})