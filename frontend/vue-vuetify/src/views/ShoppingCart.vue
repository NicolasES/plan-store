<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-row dense>
          <v-col cols="12" v-for="el in cartItems" :key="el.id">
            <CartItem :cartItem="el" @cartItemRemoved="removeCartItem"/>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="6" class="d-flex">
        <v-row class="align-self-stretch">
          <v-col>
            <v-card id="summary">
              <v-card-item class="">
                <v-card-title class="text-center font-weight-bold">RESUMO</v-card-title>
                
                <v-divider></v-divider>
                
                <div class="ma-4 d-flex justify-space-between">
                  total: <strong>R$500,35</strong>
                </div>
              </v-card-item>

              <v-divider></v-divider>

              <div class="pa-5">
                <v-btn
                  block
                  class="text-none"
                  color="indigo-darken-3"
                  size="x-large"
                  variant="flat"
                >
                  Finalizar compra
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>


    </v-row>
  </v-container>
</template>

<script setup>
import CartItem from '@/components/CartItem.vue'
</script>

<script>
export default {
  data() {
    return {
      cartItems: []
    }
  },

  beforeMount() {
    this.$http.get('shopping-cart')
      .then((res) => {
        this.cartItems = res.data
      })
  },

  methods: {
    removeCartItem(cartItemId) {
      const itemIndex = this.cartItems.findIndex((el) => el.id == cartItemId)
      this.cartItems.splice(itemIndex, 1)
    }
  }
}
</script>

<style scoped>
#summary {
  position: sticky;
  top: 80px;
}
</style>