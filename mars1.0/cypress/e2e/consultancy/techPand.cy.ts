
describe('Type in Username bar', () => {
    beforeEach(() => {
  
      cy.visit('https://live.techpanda.org/index.php/backendlogin')
    })
  
    it('displays two todo items by default', () => {
      
      cy.get('input[id="username"]').type("housert")
  
      
      })
  


  })
  