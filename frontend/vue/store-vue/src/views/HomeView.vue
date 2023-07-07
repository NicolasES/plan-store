<script setup>
import ProductCard from '@/components/ProductCard.vue'
</script>

<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col v-for="el in products" :key="el.id" cols="3">

          <product-card :name="el.name" :value="el.value" />

        </v-col>
      </v-row>

    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      products: []
    }
  },

  beforeMount() {
    this.$http.get('products')
      .then((res) => {
        this.products = res.data
      })
  }
}
</script>
