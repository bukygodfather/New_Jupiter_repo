
describe("Navigation:coaching", () => {

  
    it("Click dropdown menu", () => {
      cy.visit("https://cenidea-git-develop-cenidea.vercel.app/");
      cy.get('button[id="rcc-confirm-button"]').should('exist').click({force:true});
      cy.get('a[id="navbarDropdownMenuLink"]').click({force:true, multiple:true});
      cy.get('a[href*="/coaching/executive-coaching"]').click({multiple:true});
            

  
      
      })
  


  })
  