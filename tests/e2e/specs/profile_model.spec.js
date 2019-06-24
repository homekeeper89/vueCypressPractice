describe('/settings', ()=>{
    beforeEach(()=>{
        // cy.login()
        cy.login_two()
        cy.visit('/#/settings') // 여기에 login_model에 로그인 코드를 붙여넣는것은 안좋은 방법임 -> cy.login()을 만들자(커스텀커맨드)
    })
    // real test는 방문해서 contain 하는건데 login() 때문에 테스트 내용이 길어짐, 게다가 얘는 이전에 전부 테스트 했던 내용임
    // UI 테스트 하지말고 바로 API로 보내자
    it('greets with Your Setting', ()=>{
        cy.contains('h1', 'Your Settings')
    })

})