<template>
  <v-container>
    <v-row>
      <v-col cols="3" v-for="el in products" :key="el.id">

        <product-card :product="el" />

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'
</script>

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

