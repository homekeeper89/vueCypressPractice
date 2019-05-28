// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', ()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:8081');
  })
  it('check todo counts', ()=>{
    cy.get('[test-cy=todoList').children().should('have.length', 5);
  })
  it('check words in Todos.vue', ()=>{
    cy.contains('hwwllo world')
  })
  it('check words in Todos.vue other version', ()=>{
    cy.contains('h3', 'hwwllo world')
  })
  it('check class del is', ()=>{ // 갯수는 어찌..
    cy.get('[test-cy = todoList]').find('.del')
  })
  it('check class del using documentation', ()=>{
    cy.get('p').should(($del) => {
      expect($del).to.have.length(5)
    })
  })
  it('click del', ()=>{ // del을 클릭하게 되면 5 -> 4가 될텐데 갯수가, 이때 확인은 못하는 가?
    cy.get('[test-cy = todoList]').find('.del').first().click()
  })
  // it('click del and get counts', ()=>{ // del을 클릭하게 되면 5 -> 4가 될텐데 갯수가, 이때 확인은 못하는 가?
  //   cy.get('[test-cy = todoList]').find('.del').first().click().should(($del)=>{
  //     expect($del).to.have.length(3)
  //   })
  // })
  it('check input tag', ()=>{ // 단순히 tag가 있다 라고 찾을라면 어떻게..
    cy.get('input.add-todo')
  })
  it('type some words ', ()=>{
    cy.get('input.add-todo').type('hello world')
  })
  it('Submit data another way', ()=>{
    cy.get('input.add-todo').type('hello world')
    cy.contains('Submit').click()
  })
  it('click Submit button', ()=>{ // type some words를 하면 그게 남아있을 줄 알았는데, 별개로 이해 되나봄
    cy.get("input[type='submit']").click()
  })

  it('Check Check-box is ',()=>{
    cy.get("input[type='checkbox']")
    cy.get("input[type='checkbox']").first().click()
    cy.get('.todo-item').first().should('have.class', 'is-complete')
  })

})