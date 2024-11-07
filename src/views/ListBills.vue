<script setup>
  import { getBills } from "@/services/localStorageService";
  import { onMounted, ref } from "vue";
  import CardBill from "@/components/CardBill.vue";
  import { toBRL } from "@/services/convertionService";
  import { useRouter } from "vue-router";
  import NavApp from "@/components/NavApp.vue";

  onMounted(() => {
    document.title = "Contas";
  });

  const router = useRouter();
  const bills = ref(getBills());

  const showMessage = ref(bills.value.length > 0);

  function handleToDetails(id) {
    router.push(`/details/${id}`);
  }

  console.log(showMessage.value);
</script>

<template>
  <v-layout>
    <NavApp />
    <v-main>
      <v-container>
        <v-row v-if="!showMessage" class="text-center mt-3">
          <v-col cols="12" v-if="!bills.value">
            <h2>Não encontramos nenhuma conta sua</h2>
            <v-icon icon="mdi-emoticon-sad-outline" size="x-large"></v-icon>
            <p class="mt-3">
              Adicione clicando no ícone do canto superior direito
            </p>
          </v-col>
        </v-row>
        <v-row v-if="showMessage" class="text-center mt-3">
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
    </v-main>
  </v-layout>
</template>

<style></style>
