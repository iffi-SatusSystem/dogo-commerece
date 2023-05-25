<template >
    <v-app>
        <v-app-bar flat>
      <v-container class="d-flex align-center">
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
      
    
      <v-menu
        min-width="200px"
        rounded
      >
        <template v-slot:activator="{ props }">
          <v-btn
            icon
            v-bind="props"
          >
            <v-avatar
              color="brown"
              size="large"
            >
              <span class="text-h5">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar
                color="brown"
              >
                <span class="text-h5">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <!-- <v-divider class="my-3"></v-divider>
              <v-btn
                rounded
                variant="text"
              >
                Edit Account
              </v-btn> -->
              <v-divider class="my-3"></v-divider>
              <v-btn
                rounded
                color="error"
                variant="text"
                @click="logout"
              >
                Logout
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    
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
    const router= useRouter();  
   const  user=ref({
        initials: 'JD',
        fullName: 'John Doe',
        email: 'john.doe@doe.com',
        });
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
    ]);
    const logout = () =>{
        const result=signoutUser();
        if(!!result){
            router.push("/auth/signin")
        }else{
            alert("Something is missing")
        }
    }
     // const email= "abc@gmail.com"
  // const password= "ifffi1234"
  // const credentials=await createUser(email, password)
  // console.log(credentials);
//   onMounted(async () => {
//     // const email= "abc@gmail.com"
//     // const password= "ifffi1234"
//     // const credentials =  signinUser(email, password)
//     // console.log(credentials);
//     const email= "abcd@gmail.com"
//     const password= "ifffi1234"
//     const credentials=await createUser(email, password)
//   console.log(credentials);
//     const result = await signoutUser()
//     console.log(result);
//   })
</script>
<style lang="">
    
</style>