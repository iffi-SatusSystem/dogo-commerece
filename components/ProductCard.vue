<template>
     <v-card
          :to="`/products/${product.id}`"
          class="mt-16"
          max-width="400"
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
          </v-card>
</template>
<script setup>

const { product } = defineProps(['product'])
</script>