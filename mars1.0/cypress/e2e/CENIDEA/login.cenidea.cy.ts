
describe("Login", () => {
// can't find id email_field while running mine
  
    it("Login", () => {
      cy.visit("/");
      cy.get('input[id="email_field"]').type("ebukafrank@gmail.com");
      cy.get('input[id="password_field"]').type("#rHYK0i9NpJTUizP");
      cy.get('button[id="login_button"]').click();      

  
      
      })
  


  })
  