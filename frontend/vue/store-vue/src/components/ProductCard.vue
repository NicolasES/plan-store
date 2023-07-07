<template>
    <v-card @click="() => $router.push('/product/123')">
      <v-card-text class="text-right">
        <v-rating :value="4.5" color="amber" dense half-increments readonly size="16"></v-rating>
      </v-card-text>

      <v-img alt="image product" :src="require('@/assets/img/note.jpg')" height="200px" contain></v-img>

      <v-card-title>
        {{ name | ucfirst }}
      </v-card-title>

      <v-card-subtitle class="price-value">
        {{ value | currency }}
      </v-card-subtitle>

    </v-card>
</template>


<script scoped>
export default {
  props: ['name', 'value'],

  filters: {
    currency: (value) => {
      return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    },

    ucfirst(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>

<style>
.price-value {
  font-weight: bold;
  color: #FF6500 !important;
  font-size: 16px;
}
</style>