<script setup>
  const props = defineProps({
    parcel: Number,
    value: String,
    dueDate: String,
  });
</script>

<template>
  <v-container
    class="custom-container border-sm border-opacity-100 border-primary rounded-xl"
  >
    <v-row class="text-center">
      <v-col cols="4" class="text-body-1">{{ props.parcel }}</v-col>
      <v-col cols="4" class="text-body-1">{{ props.value }}</v-col>
      <v-col cols="4" class="text-body-1">{{ props.dueDate }}</v-col>
    </v-row>
  </v-container>
</template>

<style></style>
