import cypress from "cypress"

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should have a header', () => {
    cy.get('header')
    .contains('What Do You Need To Do Today?')
  })
})