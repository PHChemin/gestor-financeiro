<script setup>
  import { useRouter } from "vue-router";

  const router = useRouter();

  function toRegisterBill() {
    router.push("/register");
  }

  function toList() {
    router.push("/");
  }
</script>

<template>
  <v-app-bar color="primary">
    <v-app-bar-title>Gestor Financeiro</v-app-bar-title>

    <v-btn icon @click="toRegisterBill">
      <v-icon>mdi-cash-plus</v-icon>
    </v-btn>
    <v-btn icon @click="toList">
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-img
      src="https://icons.iconarchive.com/icons/graphicloads/polygon/256/dollar-icon.png"
      alt="Logo"
      max-height="32"
      max-width="32"
      class="mr-4"
    ></v-img>
  </v-app-bar>
</template>

<style></style>
