<script setup>
  import { getBills } from "@/services/localStorageService";
  import { ref } from "vue";
  import CardBill from "@/components/CardBill.vue";
  import { toBRL } from "@/services/convertionService";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const bills = ref(getBills());

  function handleToDetails(id) {
    router.push(`/details/${id}`);
  }
</script>

<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="3"><h3>Nome</h3></v-col>
      <v-col cols="3"><h3>Valor</h3></v-col>
      <v-col cols="3"><h3>Parcelas</h3></v-col>
      <v-col cols="12" v-for="bill in bills" :key="bill.id"
        ><CardBill
          :id="bill.id"
          :name="bill.name"
          :value="toBRL(bill.value)"
          :parcels="bill.parcels"
          @toDetails="handleToDetails"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style></style>
