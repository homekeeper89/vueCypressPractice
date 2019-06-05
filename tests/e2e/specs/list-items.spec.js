describe('List items', () =>{
    beforeEach(() =>{
        cy.seedAndVisit()
    })

    it('prp', ()=>{
        cy.get('todo-list li')
            .filter('.completed')
            .should('have.length', 1)
            .and('contain', 'Eggs')
            .find('.toggle')
            .should('be.checked')
    })

    it('show', ()=>{
        cy.get('.todo-count')
            .should('contain', 3)
    })

    it.only('Remove todo', () =>{
        cy.route({ // mock route 인가?
            url:'/api/todos/1',
            method:'DELETE',
            status:200,
            response:{}
        })
        cy.get('.todo-list li')
            .first()
            .find('.destroy')
            .invoke('show') // invisible 아이템을 보이게 하나봄...
            .click({force:true}) // force 이거 뭐야..
        
        // 위 아래 같음
        const list  = cy.get('.todo-list li')
        list
            .first()
            .find('.destroy')
            .invoke('show')
            .click()
        
        // 아래처럼 alias 사용 가능
        cy.get('.todo-list li').as('list')
        cy.get('@list')
    })

    it.only('Marks an incomplete item complete', () =>{
        cy.fixture('todos')
            .then(todos => {
                const target = Cypress._.head(todos) // 
                cy.route(
                    'PUT',
                    `/api/todos/${target.id}`,
                    Cypress._.merge(target, {isComplete:true})
                    )
            })
        cy.get('todo-list li')
            .first()
            .as('first-todo')

        cy.get('@first-todo')
            .find('.toggle')
            .click()
            .should('be.checked')
        
        cy.get('@first-todo')
            .should('have.class', 'completed')
        
        cy.get('.todo-count')
            .should('contain', 2)
        // debugger 가 존재함
    })
})