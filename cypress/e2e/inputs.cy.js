// CHECKING THAT ALL INPUTS ARE WORKING AND THAT BUTTON EXIST

describe('Inputs spec', () => {
  beforeEach(() => {

    // SETUP

    cy.visit('http://localhost:5173/')

  })

  it('should be possible to select date and write time', () => {

    const date = '2023-06-16'
    const time = '18:00'

    // ACTION

    cy.get('.booking-info__date').type(date)
    cy.get('.inputTime').click().type(time)

    // ASSERT

    cy.get('.booking-info__date').should('have.value', date)
    cy.get('.inputTime').should('have.value', time)

  })

  it('should be possible to type amount of persons and write how many lanes', () => {

    const persons = '4'
    const lanes = '2'
    
    // ACTION
    
    cy.get('.booking-info__who').click().type(persons)
    cy.get('.booking-info__lanes').click().type(lanes)

    // ASSERT

    cy.get('.booking-info__who').should('have.value', persons);
    cy.get('.booking-info__lanes').should('have.value', lanes)

  })

  it('should be possible to type amount of shoes and write shoesize', () => {

    // ACTION

    cy.get('.shoes__button').click()
    cy.wait(500)
    cy.get('.shoes__input').first().click().type('40')
 
    // ASSERT

    cy.get('.shoes__input').should('have.value', '40');

  })
})