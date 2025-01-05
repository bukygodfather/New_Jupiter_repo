
describe("Login", () => {

  /* still cant find placeholder while running at my own end, maybe it's network,
    please try code at your end to verify, thank you*/

    it("browse test", () => {
      
     cy.loginWith();      
      cy.get('input[class="form-control px-3 m-2 rounded-pill shadow-lg"]')
      .type("Devops")
      .click({force:true});
  
      
      })
  


  })
  