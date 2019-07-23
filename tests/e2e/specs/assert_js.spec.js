// e2e 가 아닌 intergration 테스트
// set up -> mount -> assert
// cypress 사용하면 unit test를 intergrated 처럼 사용할 수 있다.
// 
import LoginComponent from './src/..'
import mount from 'cypress-<X>-unit-test'

it('logs user in', ()=>{ // cy.visit 하지말고 아예 그냥 임포트 해라.. -> storybook 이 하는 행동 componet mount 
    mount(LoginComponent)
    cy.get('#login').click()
})

// 너무 많은 테스트가 통과된다 -> 스냅샷을 찍어라
it('add numbers', ()=>{
    expect(add(1,2)).toMatchSnapshot();
    expect(add(100, -50)).toMatchSnapshot()
})

it('compares multi line strings', ()=>{
    snaptshot(
        'adfa'
    )
})

// pixel 비교는 어떻게?? 
it('looks the same' , ()=>{
    expect(cy.screenshot()).toMatchSnapshot()
})