<template>
  <v-card color="#CFD8DC">
    <div class="d-flex">
      <v-avatar class="ma-3" size="130" rounded="0">
        <v-img src="@/assets/img/note.jpg"></v-img>
      </v-avatar>
      <div>
        <v-card-title class="text-h5">
          {{ cartItem.product.name }}
        </v-card-title>

        <v-card-subtitle>{{ cartItem.product.value }}</v-card-subtitle>

        <v-card-actions>
          <v-btn @click="removeFromCart" prepend-icon="mdi-check-circle" prepend="mdi-account-circle" variant="outlined" size="small">
            <template v-slot:prepend>
              <v-icon color="red"></v-icon>
            </template>

            Remover

          </v-btn>
        </v-card-actions>


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