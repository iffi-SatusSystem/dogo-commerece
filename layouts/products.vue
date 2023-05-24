<template >
    <v-app>
        <v-navigation-drawer
      model-value
      class="pt-4 mt-16"
      color="grey-lighten-3"
    >
    <v-list rounded="lg"
    >
    <template  v-for="n in 5"
    :key="n">
                <v-list-item
                 :to="'/products/'+n"
                  link
                >
                  <v-list-item-title>
                    Products Item {{ n }}
                  </v-list-item-title>
                </v-list-item>
            </template>
            <v-divider class="my-1"></v-divider>
                <v-list-item to="/"
                link
                color="grey-lighten-4"
                >
                <v-list-item-title>
                  Go to Home Page
                </v-list-item-title>
              </v-list-item>
                <v-divider class="my-1"></v-divider>
                <v-list-item
                    to="/products"
                  link
                  color="grey-lighten-4"
                >
                  <v-list-item-title>
                    Go to Products Page
                  </v-list-item-title>
                </v-list-item>

    </v-list>
    </v-navigation-drawer>
    <v-main>
        <slot/>
    </v-main>
    </v-app>
</template>
<script setup>

</script>
