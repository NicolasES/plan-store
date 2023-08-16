<template>
  <v-card>

    <v-card-text class="text-right">
      <v-rating model-value="3.5" color="amber" dense half-increments readonly size="16"></v-rating>
    </v-card-text>
    <v-img alt="image product" src="@/assets/img/note.jpg" height="200px" contain></v-img>

    <v-card-item>
      <v-card-title>
        {{ ucfirst(product.name) }}
      </v-card-title>

      <v-card-subtitle class="price-value">
        {{ currency(product.value) }}
      </v-card-subtitle>
    </v-card-item>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn block @click="addToCart">
        <template v-slot:prepend>
          <v-icon icon="mdi-cart-arrow-down"></v-icon>
        </template>
        COMPRAR
      </v-btn>
    </v-card-actions>

  </v-card>
</template>


<script scoped>
export default {
  props: ['product'],

  methods: {
    currency(value) {
      return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    },

    ucfirst(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },

    addToCart() {
      this.$http.post('shopping-cart/item',
        {
          "productId": this.product.id,
          "quantity": 1
        })
        .then((res) => {
          console.log(res.data)
        })
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