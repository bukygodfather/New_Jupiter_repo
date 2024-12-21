
describe('Login CENIDEA', () => {
  
    it('login with valid ID', () => {
      
      cy.get('input[id="email"]').type("standard_user");
      cy.get('input[id="password"]').type("secret_sauce");
      cy.get(`button[id="submit"]`).click()
  
      
      })
  


  })
  