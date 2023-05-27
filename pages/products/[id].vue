<template>
<Head>
  <Title>Nuxt DOGO | {{ product.title }}</Title>
  <Meta name="description" :content="product.description" />
</Head>
  <ProductDetails  :product="product"/>

</template>
<script setup>
definePageMeta({
    layout:"products"
})
const {id}=useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id
const {data: product} = await useFetch(uri,{key: id})
if(!product.value){
  throw createError({
    statusCode: 400,
    statusMessage: "Product not found",
    fatal: true
  })
}
</script>