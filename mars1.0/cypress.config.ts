import { defineConfig } from "cypress";

export default defineConfig({
defaultCommandTimeout:5000,
viewportWidth:1920,
viewportHeight:1080,

env:{
  USERNAME:'cen.idea',
},

  
  
  e2e: {baseUrl:"https://www.cenidea.co.uk/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
