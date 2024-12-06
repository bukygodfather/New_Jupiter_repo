
describe('Type in Username bar', () => {
    beforeEach(() => {
  
      cy.visit('https://www.saucedemo.com/')
    })
  
    it('get and click on search button', () => {
      
      cy.get('input[id="user-name"]').type("standard_user");
      cy.get('input[id="password"]').type("secret_sauce");
      cy.get(`input[id="login-button"]`).click()
  
      
      })
  


  })
  