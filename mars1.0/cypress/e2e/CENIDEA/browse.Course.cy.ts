
describe("Login", () => {

  /* still cant find placeholder while running at my own end, maybe it's network,
    please try code at your end to verify, thank you*/

    it("browse test", () => {
      
     cy.loginWith();      
      cy.get('input[placeholder*="Search courses with any keyword on any course..."]')
      .type("Devops")
      .type("{enter}");
  
      
      })
  


  })
  