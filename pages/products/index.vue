<template >
      <v-container>
        <v-row>
          <v-col
            v-for="product in products"
            :key="product.id"
            cols="4"
          >
         <ProductCard :product="product"/>
          </v-col>
        </v-row>
      </v-container>
</template>
<script setup>

definePageMeta({
    layout:"products",
   
});
useHead({
  title: "DOGO Merch",
  meta:[
    {
      name: "description",
      content: "DOGO Merch Page"
    }
  ]
})
const {data: products} = await useFetch("https://fakestoreapi.com/products")
// onMounted(() =>{
//     console.log(products);
// })

</script>
