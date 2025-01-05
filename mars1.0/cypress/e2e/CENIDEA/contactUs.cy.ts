
describe("Navigation:coaching", () => {

  
    it("Click dropdown menu", () => {
      cy.visit("https://cenidea-git-develop-cenidea.vercel.app/");
      cy.get('button[id="rcc-confirm-button"]').should('exist').click({force:true});
      cy.get('a[href*="/home/contactus"]').click({force:true, multiple:true}).click({force:true, multiple:true});
    
            

  
      
      })
  


  })
  