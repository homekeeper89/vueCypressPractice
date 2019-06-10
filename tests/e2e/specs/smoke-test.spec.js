describe('Smoke test', ()=>{
    beforeEach(()=>{ // 일단 시작하면 DB 다 지우고 시작한다는 뜻이네..
        cy.request('GET', '/api/todos')
            .its('body') // array sored
            .each(todo => cy.request('DELETE', `/api/todos/${todo.id}`))
    })

    context('with no todo', ()=>{
        it.only('Serve new todo', ()=>{
            cy.visit('/')
            cy.server()
            cy.route('POST', '/api/todos')
                .as('create')

            cy.focused()
                .type('But milk{enter}')
            cy.wait('@create')

            cy.get('.todo-list li')
                .should('have.length', 1)
        })
    })
    context('with multiple todo', ()=>{
        it.only('Serve new todo', ()=>{
            const items = [
                {text:'Buy milk', expectedLength:1},
                {text:'Buy eggs', expectedLength:2},
                {text:'Buy something', expectedLength:3}
            ]
            cy.visit('/')
            cy.server()
            cy.route('POST', '/api/todos')
                .as('create')
            cy.wrap(items)
                .each(todo =>{
                    cy.focused()
                        .type(todo.text)
                        .type('{enter}')
                })

            cy.wait('@create')
            cy.get('.todo-list li')
                .should('have.length', 1)
        })
    })

    context('With active todos', ()=>{ // 만들고 지운다
        beforeEach(()=>{
            cy.fixture('todos')
                .each(todo=>{
                    const newTodo=Cypress._.merge(todo, {isComplete:false})
                    cy.request('POST', '/api/todos', newTodo)
                })
            cy.visit('/')
            })
            it.only('Loads existing data', ()=>{
                cy.get('.todo-list li')
                    .should('have.length', 4)

            it.only("Delete todos", ()=>{
                cy.server()
                cy.route('DELETE', '/api/todos/*')
                    .as('delete')
                cy.get('.todo-list li')
                    .each($el =>{
                        cy.wrap($el)
                            .find('.destroy')
                            .invoke('show')
                            .click()
                        cy.click()
                        cy.wait('@delete')
                    })
                .should('not.exist')
            })
        })
    })

    it.only('Toggles todos',()=>{
        cy.server()
        cy.route('PUT', '/api/todos/*')
            .as('update')
        cy.get('.todo-list li')
            .each($el =>{
                cy.wrap($el)
                    .as('item')
                    .find('.toggle')
                    .click()
                cy.wait('@update')
                
                cy.get('@item')
                    .should('have.class', 'completed')
            })
    })

    it.only('Toggles todos',()=>{
        const clickAndWait = ($el) =>{
            cy.wrap($el)
                    .as('item')
                    .find('.toggle')
                    .click()
            cy.wait('@update')
        }
        cy.server()
        cy.route('PUT', '/api/todos/*')
            .as('update')
        cy.get('.todo-list li')
            .each($el =>{
                clickAndWait($el)
                cy.get('@item')
                    .should('have.class', 'completed')
            })
            .each($el =>{
                clickAndWait($el)
                cy.get('@item')
                    .should('not.have.class', 'completed')
            })
    })

})