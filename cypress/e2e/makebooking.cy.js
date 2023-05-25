// CHECKING THAT A REGULAR BOOKING IS POSSIBLE TO MAKE

describe('makebooking spec', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should be able to create a booking and then get confirmation', () => {

    // ACTION

    const date = '2023-06-16'
    const time = '18:00'
    const persons = '4'
    const lanes = '2'

    cy.get('.booking-info__date').type(date)
    cy.get('.inputTime').click().type(time)

    cy.get('.booking-info__who').click().type(persons)
    cy.get('.booking-info__lanes').click().type(lanes)

    cy.get('.shoes__button').first().click()
    cy.wait(200)
    cy.get('.shoes__input').first().click().type('40')

    cy.get('.shoes__button').last().click()
    cy.wait(200)
    cy.get('.shoes__input').last().click().type('41')

    cy.get('.shoes__button').last().click()
    cy.wait(200)
    cy.get('.shoes__input').last().click().type('42')

    cy.get('.shoes__button').last().click()
    cy.wait(200)
    cy.get('.shoes__input').last().click().type('43')  

    cy.get('.booking__button').should('be.visible').click()

    // ASSERT

    cy.get('.confirmedWhen').should('have.value', date + ' ' + time)
    cy.get('.bookingNumber').should('be.ok')
    cy.get('.confirmation__price').should('have.text', 'Total:680 sek')

    // NO NEED TO CHECK OTHER INPUTS BECAUSE BOOKING IS NOT POSSIBLE UNLESS ALL INPUTFIELDS ARE FILLED OUT

  })
})