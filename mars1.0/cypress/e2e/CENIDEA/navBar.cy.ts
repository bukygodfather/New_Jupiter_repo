
describe("Navigation:coaching", () => {

    //please check if test passed
  
    it("Click dropdown menu", () => {
      cy.visit("/");
      cy.get('button[id="rcc-confirm-button"]').should('exist').click({force:true});
      cy.get('a[id="navbarDropdownMenuLink"]').click({force:true, multiple:true});
      cy.get('a[href="/coaching/executive-coaching"]').click({force:true , multiple:true});
            

  
      
      })
  


  })
  