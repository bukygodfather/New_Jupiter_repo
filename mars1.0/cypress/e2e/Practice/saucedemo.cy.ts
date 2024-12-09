
describe('Type in Username bar', () => {
    beforeEach(() => {
  
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
    })
  
    it('get and click on search button', () => {
      
      cy.get('input[id="email"]').type("standard_user");
      cy.get('input[id="password"]').type("secret_sauce");
      cy.get(`button[id="submit"]`).click()
  
      
      })
  


  })
  