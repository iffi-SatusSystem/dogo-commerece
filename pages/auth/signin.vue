<template>
    <v-app>
      <v-form @submit.prevent="login" @keyup.enter.prevent="login" v-model="valid">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :counter="32"
            label="Password"
            type="password"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-btn @click="login" text="Login">
            </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  <div class="mt-3">
    <nuxt-link to="/auth/signup" >Go to SignUp Page</nuxt-link>
  </div>
    </v-app>
</template>
<script setup>
    definePageMeta({
      layout:"authentication"
    })
    const router= useRouter()
    const valid = ref(false)
    const email =ref("")
    const password = ref("")
    const emailRules=ref( [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            v => v.indexOf('.') - v.indexOf('@') > -1 || 'E-mail should contain a vaild domain name',
            v => v.indexOf('.') <= v.length - 3 || "Email should contain a valid domain extension"
        ]);
    const passwordRules= ref([
         v => !!v || 'Password is required',
         v => v.length >= 8 || 'Password must be more than 8 characters',
         v => /^/.test(v) || "Password must be strong",
         v => /(?=.*[a-z])/.test(v) || "Password must be strong",
         v => /(?=.*[A-Z])/.test(v) || "Password must be strong",
         v => /(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+\-=|\\])/g.test(v) || "Password must be strong",
         v => /.{8,32}/.test(v) || "Password must be shorter than 32 characters"      
    ]);
    const login= () =>{
        const result=signinUser(email.value,password.value)
        if(!!result){
            router.push("/")
        }else{
            alert("Enter valid Credentials")
        }
    }
</script>