<template>
  <v-app>
    <default-bar />

    <default-view />

    <Navigation />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import Navigation from './Navigation.vue'
</script>
