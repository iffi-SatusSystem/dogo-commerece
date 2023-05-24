import { env } from "process";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@invictus.codes/nuxt-vuetify',
        '@nuxtjs/tailwindcss'
      ],
      app:{
       head:{
        title:"Nuxt DOGO App",
        meta:[
          {
          name:  "description",
          content: "This is built on Nuxt3"
          }
        ],
        link:[
          {
            rel:"stylesheet", href:"https://fonts.googleapis.com/icon?family=Material+Icons"
          }
        ]
       }
      },
      vuetify: {
        /* vuetify options */
        // vuetifyOptions: {
        //   // @TODO: list all vuetify options
        // },
        moduleOptions: {
          /* nuxt-vuetify module options */
          treeshaking: false,
          useIconCDN: true,
          /* vite-plugin-vuetify options */
        //   styles: true | 'none' | 'expose' | 'sass' | { configFile: string },
          autoImport: true,
        }
      },

      runtimeConfig:{
        public:{
          firebaseApiKey: process.env.FIREBASE_API_KEY,
          currencyKey: process.env.CURRENCY_API_KEY,
        }
      },

})