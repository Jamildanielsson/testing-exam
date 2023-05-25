// CHECK SO THAT THERE IS A FUNCTION TO REMOVE SHOES IF TO MANY HAS BEEN CHOSEN, 2 CASES.

describe('check so that it is possible to delete a selection of shoes if to many has been added to booking spec', () => {

    // SETUP

  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })
  
  it('should add 4 shoes alternatives, take away 3, and then we check for the length of the list of alternatives, should be 1', () => {

    // ACTION

    cy.get('.shoes__button').first().click()
    cy.wait(200)

    cy.get('.shoes__button').last().click()
    cy.wait(200)

    cy.get('.shoes__button').last().click()
    cy.wait(200)

    cy.get('.shoes__button').last().click()
    cy.wait(200)

    cy.get('.shoes__button--small').last().click()
    cy.wait(200)
    cy.get('.shoes__button--small').last().click()
    cy.wait(200)
    cy.get('.shoes__button--small').last().click()


    // ASSERT

    cy.get('.shoes__input').should('have.length', 1)

  })

  it('should add 4 shoes alternatives, take away 2, and then we check for the length of the list of alternatives, should be 2', () => {

    // ACTION

    cy.get('.shoes__button').first().click()
    cy.wait(200)

    cy.get('.shoes__button').last().click()
    cy.wait(200)

    cy.get('.shoes__button').last().click()
    cy.wait(200)

    cy.get('.shoes__button').last().click()
    cy.wait(200)


    cy.get('.shoes__button--small').last().click()
    cy.wait(200)
    cy.get('.shoes__button--small').last().click()


    // ASSERT

    cy.get('.shoes__input').should('have.length', 2)

  })

})