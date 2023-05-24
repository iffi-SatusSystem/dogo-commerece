<template >
    <v-app>
        <v-app-bar flat>
      <v-container class="fill-height d-flex align-center">
        <v-app-bar-title class="text-green-accent-2" text="Dogo Merchant">

        </v-app-bar-title>
        <v-spacer></v-spacer>
        <template v-for="link in links"
          :key="link">
    <NuxtLink  class="text-white" style="text-decoration: none;" :to="link.link"><v-btn
          
          variant="elevated"
            class="ma-2"
            color="green-accent-3"
            :text="link.name"
        ></v-btn>
    </NuxtLink>
</template>
      

       

       
      </v-container>
    </v-app-bar>
    
    <v-main>
        <v-container>
          <slot />
        </v-container>
    </v-main>
    </v-app>
</template>
<script setup>
    const links= ref([
        {
            name:"Home",
            link:"/"
        },
        {
            name:"About",
            link:"/about"
        },
        {
            name:"Products",
            link:"/products"
        }
    ])
</script>
<style lang="">
    
</style>