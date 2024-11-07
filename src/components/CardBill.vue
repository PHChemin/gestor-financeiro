<script setup>
  import { reactive } from "vue";

  const props = defineProps({
    id: Number,
    name: String,
    value: String,
    parcels: Number,
  });

  const emit = defineEmits();
  const bill = reactive({ ...props });

  function toDetails() {
    emit("toDetails", bill.id);
  }
</script>

<template>
  <v-container
    class="custom-container border-sm border-opacity-100 border-primary rounded-xl"
  >
    <v-row>
      <v-col cols="3" class="text-body-1 text-center">{{ bill.name }}</v-col>
      <v-col cols="3" class="text-body-1">{{ bill.value }}</v-col>
      <v-col cols="3" class="text-body-1">{{ bill.parcels }}</v-col>
      <v-col cols="3" class="text-body-1"
        ><v-btn
          @click="toDetails"
          color="primary"
          append-icon="mdi-arrow-right"
          variant="outlined"
        >
          Ver
        </v-btn></v-col
      >
    </v-row>
  </v-container>
</template>

<style></style>
