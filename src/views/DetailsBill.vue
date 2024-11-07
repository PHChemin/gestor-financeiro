<script setup>
  import CardParcel from "@/components/CardParcel.vue";
  import NavApp from "@/components/NavApp.vue";
  import { getDateParcel } from "@/services/billService";
  import { toBRL } from "@/services/convertionService";
  import { getBillById } from "@/services/localStorageService";
  import { ref } from "vue";
  import { useRoute } from "vue-router";

  const route = useRoute();
  const billId = route.params.id;
  const bill = ref(getBillById(billId));

  bill.value.parcelsValue = toBRL(bill.value.parcelsValue);
</script>

<template>
  <v-layout>
    <NavApp />
    <v-main>
      <v-container class="text-center mt-3">
        <v-row>
          <v-col cols="12"
            ><h2>{{ bill.name }} - Parcelas</h2>
          </v-col>
          <v-col cols="4"><h3>Parcela</h3></v-col>
          <v-col cols="4"><h3>Valor</h3></v-col>
          <v-col cols="4"><h3>Vencimento</h3></v-col>
          <v-col cols="12" v-for="i in bill.parcels" :key="i">
            <CardParcel
              :parcel="i"
              :value="bill.parcelsValue"
              :due-date="getDateParcel(bill.dueDate, i)"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style></style>
