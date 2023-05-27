<template>
  <v-app>
  <NuxtLayout :name="custom" >
    <NuxtPage />
  </NuxtLayout>
</v-app>
</template>
<script setup>
definePageMeta({
    middleware:[
      "auth"
    ]
  })
  const custom= ref("")
  const firebaseUser= useFirebaseUser()
  onMounted(()=>{
    console.log();
    if(firebaseUser){
      custom.value="default"
    }else{
      custom.value="authentication"
    }
  })

</script>