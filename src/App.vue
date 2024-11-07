<script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <v-app fill-height>
    <RouterView />
  </v-app>
</template>

<style>
  .custom-container {
    box-shadow: 1px 1px 15px var(--primary-color);
  }
</style>
