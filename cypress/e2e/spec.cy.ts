import { add } from "src/app/app.component"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('passes', () => {
    expect(add(1,2)).equal(3)
  })

})