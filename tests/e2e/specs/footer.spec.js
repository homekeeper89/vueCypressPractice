describe('Footer', ()=>{
    context('with a single todo', () =>{
        it('displays a singula todo in count', () =>{
            cy.seedAndVisit([{id:1, name:'Buy milk', isComplete:false}])
            cy.get('.todo-count')
                .should('contain', '1 todo left')
        })
    })
    context('with multiple todos', ()=>{
        it('display plural', () =>{
            cy.seedAndVisit()
            cy.get('.todo-count')
                .should('contain', '3 todo left')
        })
    })
    // 위 아래 같음
    context('with multiple todos', ()=>{
        beforeEach(() =>{
            cy.seedAndVisit()
        })
        it.only('Filter to active', ()=>{
            cy.contains('Active')
                .click()  
            cy.get('.todo-list li')
                .should('have.length', 3)
        })
        it.only('Filter to completed', ()=>{
            cy.contains('Completed')
                .click()  

            cy.get('.todo-list li')
                .should('have.length', 1)
        })
        it.only('Handled filter links', ()=>{
            const filters = [
                {link:'Active', expectedLength:3},
                {link:'Completted', expectedLength:1},
                {link:'All', expectedLength:5}
            ]
            cy.wrap(filters)
                .each(filter=>{
                    cy.contains(filter.link)
                        .click()
                    
                    cy.get('.todo-list li')
                        .should('have.length', filter.expectedLength)
                })

        })
    })
})