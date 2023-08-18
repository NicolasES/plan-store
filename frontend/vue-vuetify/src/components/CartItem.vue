<template>
  <v-card color="#CFD8DC">
    <div class="d-flex">
      <v-img alt="image product" src="@/assets/img/note.jpg" max-width="120" class="ma-3"></v-img>

      <div class="d-flex flex-column align-center justify-center">
        <v-card-title>
          {{ $filters.ucfirst(cartItem.product.name) }}
        </v-card-title>

        <div>
          {{ cartItem.quantity }} X
          {{ $filters.currency(cartItem.product.value) }}
        </div>
      </div>


      <div class="ml-auto d-flex flex-column align-center justify-end">

        <div>
          <strong class="text-red-lighten-1">
            {{ $filters.currency(cartItem.quantity * cartItem.product.value) }}
          </strong>
        </div>

        <div>

          <v-card-actions>
            <v-btn @click="removeFromCart" prepend-icon="mdi-check-circle" prepend="mdi-account-circle" variant="outlined"
              size="small">
              <template v-slot:prepend>
                <v-icon color="red"></v-icon>
              </template>

              Remover

            </v-btn>
          </v-card-actions>
        </div>

      </div>
    </div>

  </v-card>
</template>
  
  
<script scoped>
export default {
  props: ['cartItem'],

  methods: {
    removeFromCart() {
      this.$http.delete('shopping-cart/item/' + this.cartItem.id)
        .then(() => {
          this.$emit('cartItemRemoved', this.cartItem.id)
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