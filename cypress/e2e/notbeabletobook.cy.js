// NOT BE ABLE TO PROCEED TO CONFIRMATIONPAGE UNLESS ALL INPUTFIELDS ARE FILLED IN

describe('not be able to book if any inputfield is missing spec', () => {
    beforeEach(() => {
      //SETUP
      cy.visit('http://localhost:5173/')

    })
  
  it('should show an error message because only date-input is filled in', () => {
    // ACTION
    const date = '2023-06-16'
    cy.get('.booking-info__date').type(date)
    
    cy.get('.booking__button').click()
    cy.wait(500)

    // ASSERT 

    cy.get('.error-message').should('be.visible')
    cy.get('.error-message__text').should('have.text', 'Fill out all the fields and make sure that people and shoes is the same number.')

  })

  it('should show an error message because only time-input is filled in', () => {
    // ACTION
    const time = '18:00'
    cy.get('.inputTime').click().type(time)
    
    cy.get('.booking__button').click()
    cy.wait(500)

    // ASSERT 
    cy.get('.error-message').should('be.visible')
    cy.get('.error-message__text').should('have.text', 'Fill out all the fields and make sure that people and shoes is the same number.')

  })

  it('should show an error message because only persons-input is filled in', () => {
    // ACTION
    const persons = '4'
    cy.get('.booking-info__who').click().type(persons)
    
    cy.get('.booking__button').click()
    cy.wait(500)

    // ASSERT 
    cy.get('.error-message').should('be.visible')
    cy.get('.error-message__text').should('have.text', 'Fill out all the fields and make sure that people and shoes is the same number.')

  })

  it('should show an error message because only lanes-input is filled in', () => {
    // ACTION
    const lanes = '2'
    cy.get('.booking-info__lanes').click().type(lanes)
    
    cy.get('.booking__button').click()
    cy.wait(500)

    // ASSERT 
    cy.get('.error-message').should('be.visible')
    cy.get('.error-message__text').should('have.text', 'Fill out all the fields and make sure that people and shoes is the same number.')

  })

  it('should show an error message because only shoes are filled in', () => {
    // ACTION
    cy.get('.shoes__button').first().click()
    cy.wait(500)
    cy.get('.shoes__input').first().click().type('40')
    
    cy.get('.booking__button').click()
    cy.wait(500)

    // ASSERT 
    cy.get('.error-message').should('be.visible')
    cy.get('.error-message__text').should('have.text', 'Fill out all the fields and make sure that people and shoes is the same number.')

  })



})