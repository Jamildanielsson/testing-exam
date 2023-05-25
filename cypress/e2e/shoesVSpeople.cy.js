describe('check so that shoes corresponds to people playing and show error-message if its not correct spec', () => {
  
    // SETUP
  
    beforeEach(() => {

    cy.visit('http://localhost:5173/')

  })
  
  it('should not be able to pick fewer amount of shoes than people playing 1/4', () => {

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

    cy.get('.booking__button').click()

    // ASSERT 

    cy.get('.error-message').should('be.visible')
    cy.get('.error-message__text').should('have.text', 'Fill out all the fields and make sure that people and shoes is the same number.')


  })
  it('should not be able to pick fewer amount of shoes than people playing 2/4', () => {

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

    cy.get('.booking__button').click()

    // ASSERT 

    cy.get('.error-message').should('be.visible')
    cy.get('.error-message__text').should('have.text', 'Fill out all the fields and make sure that people and shoes is the same number.')


  })
  it('should not be able to pick fewer amount of shoes than people playing 3/4', () => {

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

    cy.get('.booking__button').click()

    // ASSERT 

    cy.get('.error-message').should('be.visible')
    cy.get('.error-message__text').should('have.text', 'Fill out all the fields and make sure that people and shoes is the same number.')


  })
  it('should not be able to pick more shoes than people playing 5/4', () => {

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

    cy.get('.shoes__button').last().click()
    cy.wait(200)
    cy.get('.shoes__input').last().click().type('44')

    cy.get('.booking__button').click()

    // ASSERT 

    cy.get('.error-message').should('be.visible')
    cy.get('.error-message__text').should('have.text', 'Fill out all the fields and make sure that people and shoes is the same number.')


  })

})