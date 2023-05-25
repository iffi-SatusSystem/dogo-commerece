import {initializeApp}from "firebase/app"
export default defineNuxtPlugin( nuxtApp =>{
const config= useRuntimeConfig()
// console.log(config.public.firebaseApiKey);

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: config.public.firebaseApiKey,
    authDomain: "dojo-commerece.firebaseapp.com",
    projectId: "dojo-commerece",
    storageBucket: "dojo-commerece.appspot.com",
    messagingSenderId: "972536807270",
    appId: "1:972536807270:web:c8fdf7efb7cef3fd98d2a7"
  };

    const app= initializeApp(firebaseConfig)
    // console.log(app);

})