import { defineConfig } from "cypress";

export default defineConfig({
defaultCommandTimeout:200000,
viewportWidth:1920,
viewportHeight:1080,

env:{
  USERNAME:'cen.idea',
},

  
  
  e2e: {baseUrl:"https://cenidea-git-develop-cenidea.vercel.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
