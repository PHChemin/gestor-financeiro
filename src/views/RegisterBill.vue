<script setup>
  import FormBill from "@/components/FormBill.vue";
  import { createBill } from "@/services/billService";
  import { onMounted } from "vue";
  import { useRouter } from "vue-router";

  onMounted(() => {
    document.title = "Cadastro";
  });

  const router = useRouter();

  function routeToList() {
    router.push("/");
  }

  function handleSubmit(name, value, parcels, dueDate) {
    createBill(name, value, parcels, dueDate);
    routeToList();
  }
</script>

<template>
  <v-container class="d-flex align-center h-100">
    <FormBill
      @submitForm="handleSubmit"
      @backPage="routeToList"
      class="h-100 h-sm-75"
    />
  </v-container>
</template>

<style></style>
