<template>
  <v-navigation-drawer permanent location="right" expand-on-hover rail>
    <v-list  nav>
      <v-list-item 
        prepend-icon="mdi-store" title="Inicio"
        @click="() => $router.push({name: 'Home'})">
      </v-list-item>

      <v-list-item 
        prepend-icon="mdi-cart" title="Carrinho de compras"
        @click="() => $router.push({name: 'ShoppingCart'})">
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
</script>
