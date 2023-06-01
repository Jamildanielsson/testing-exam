// CHECK SO THAT USER CAN NAVIGATE THROUGH THE WEBSITE

describe('Check navigation-alternatives so that the user easy can navigate through the application spec', () => {
  
   // SETUP

  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should open a navigation menu', () => {
    
    // ACTION

    cy.get('.navigation__icon').click()

    // ASSERT

    cy.get('.show-menu').should('be.visible')

  })

  it('should be able to navigate to confirmation-page', () => {
    
    // ACTION

    cy.get('.navigation__icon').click()
    cy.get('.navigation__link').last().click()

    // ASSERT

    cy.get('.confirmation').should('be.visible')

  })

  it('should navigate to booking-page', () => {
    
    // ACTION

    cy.visit('http://localhost:5173/confirmation')
    cy.get('.navigation__icon').click()
    cy.get('.navigation__link').first().click()

    // ASSERT

    cy.get('.booking').should('be.visible')

  })
})