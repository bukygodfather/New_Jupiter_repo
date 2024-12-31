
describe("Login", () => {

  
    it("browse test", () => {
      
     cy.loginWith();      
      cy.get('input[placeholder="Search courses with any keyword on any course..."]')
      .type("Devops")
      .type("{enter}");
  
      
      })
  


  })
  