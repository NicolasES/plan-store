<template>
  <v-app-bar>
    <v-app-bar-title>
      <span id="link-home" @click="() => $router.push('/')">
        <v-icon icon="mdi-store" />
        STORE
      </span>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
  //
</script>

<style scoped>
#link-home {
  cursor: pointer;
}
</style>
