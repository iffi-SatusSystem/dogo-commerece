<template>
    <v-container>
        <div class="mx-auto">
        <v-card
          class="mt-16"
          max-width="500"
          max-height="auto"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      cover
      height="250"
      :src="product.image"
    ></v-img>

    <v-card-item>
      <v-card-title>{{ product.title }}</v-card-title>

      <v-card-subtitle>
        <span class="me-1">Local Favorite</span>

        <v-icon
          color="error"
          icon="mdi-fire-circle"
          size="small"
        ></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="product.rating.rate"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>

        <div class="text-grey ms-4">
         {{ product.rating.rate }} ({{ product.rating.count }})
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • {{ product.price }}
      </div>

      <div>{{ product.description }}</div>
    </v-card-text>
    <v-card-actions>
      <button class="btn flex" @click="addProduct">
        <i class="material-icons mr-2">add_shopping_cart</i>
      </button>
    </v-card-actions>
          </v-card>
        </div>
    </v-container>
</template>
<script setup>
const { product } = defineProps([
    'product'
])


const addProduct=  () =>{

}
</script>