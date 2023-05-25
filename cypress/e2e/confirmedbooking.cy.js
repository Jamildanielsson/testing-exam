// CHECK SO THAT ALL INFORMATION FROM BOOKING GOES TO CONFIRMED TICKET AND THAT IT IS NOT POSSIBLE TO EDIT THE INFORMATION

describe('check confirmed booking so that its not possible to edit spec', () => {
 
  // SETUP

  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should not be able to edit confirmed booking once it has been made', () => {

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
   
       cy.get('.confirmedWhen').should('have.value', date + ' ' + time).should('be.disabled')
       cy.get('.confirmedWho').should('have.value', persons).should('be.disabled')
       cy.get('.confirmedLanes').should('have.value', lanes).should('be.disabled')
       cy.get('.bookingNumber').should('be.ok').should('be.disabled')
       cy.get('.confirmation__price').should('have.text', 'Total:680 sek')
   
     })

  })
