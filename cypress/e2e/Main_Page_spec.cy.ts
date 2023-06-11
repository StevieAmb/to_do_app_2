import cypress from "cypress"

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should have a header', () => {
    cy.get('header')
    .contains('What Do You Need To Do Today?')
  })

  it('should have an input field you can write in', () => {
    cy.get('input[placeholder*="keep it"]')
    .type('I promise to go to bed by 9PM')
  })

  it('should have a button', () => {
    cy.get('button')
  })

  it('should be able to submit a promise', () => {
    cy.get('input[placeholder*="keep it"]')
    .type('I promise to go to bed by 9PM')

    cy.get('button').click()
  })

})