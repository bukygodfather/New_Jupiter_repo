/// <reference types="cypress" />

declare namespace Cypress {

  interface Chainable{
      loginWith(): Chainable<void>

  }
   
   }


   Cypress.Commands.add("loginWith",()=>{
  
    cy.url().should("include", "cenidea");
    cy.title().should("include", "Consultancy");
    cy.wait(50000)
    cy.get('button[id="rcc-confirm-button"]').should('exist').click({force:true});      


   
  }
    
  
  )