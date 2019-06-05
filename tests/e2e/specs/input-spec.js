// input-spec.js
describe('App initilization', () => {
    it('Loads todos on page load', ()=>{
        // cy.server()
        // cy.route('GET', '/api/todos', 'fixture:todos') fixture 폴더가 없는데 이 todo를 어떻게 넣지, 
        // 여기서 todo는 json임. fixture에 들어가는건 어떤 형태 제한이 있는가
        // cy.visit('/')
        cy.seedAnvVisit([])
        cy.get('.todo-list li').should('have.length', 4) // 4개 있는지 확인함
    })

    it.only('Displays an error onfiler', ()=>{
        // 에러를 강제로 만들어 내는 건가?
        cy.server()
        cy.route({
            url:'/api/todos',
            method:'GET',
            status:500,
            response:{}
        })
        cy.visit('/')
        cy.get('.todo-list li').should('not.exist')
        cy.get('.error').should('be.visible')
    })
})