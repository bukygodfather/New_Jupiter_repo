
describe("Login", () => {

  
    it("Login", () => {
      cy.visit("https://www.cenidea.co.uk/login");
      cy.get('input[id="email_field"]').type("ebukafrank@gmail.com");
      cy.get('input[id="password_field"]').type("#rHYK0i9NpJTUizP");
      cy.get('button[id="login_button"]').click();      

  
      
      })
  


  })
  