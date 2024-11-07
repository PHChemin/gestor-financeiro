<script setup>
  import { MESSAGES } from "@/constants/globalRoles";
  import { ref } from "vue";

  const emit = defineEmits();

  const billName = ref("");
  const billValue = ref("");
  const billParcels = ref("");
  const billDueDate = ref("");
  const isFormValid = ref(false);

  function validateName() {
    if (!billName.value) return MESSAGES.REQUIRED_FIELD;

    return true;
  }

  function validateValue() {
    if (!billValue.value) return MESSAGES.REQUIRED_FIELD;

    if (parseFloat(billValue.value) <= 0) return MESSAGES.iNVALID_VALUE;

    return true;
  }

  function validateParcels() {
    if (!billParcels.value) return MESSAGES.REQUIRED_FIELD;

    if (parseFloat(billParcels.value) <= 0) return MESSAGES.iNVALID_VALUE;

    if (parseFloat(billParcels.value) % 1 !== 0)
      return "Este campo deve conter um número inteiro";

    return true;
  }

  function validateDueDate() {
    if (!billDueDate.value) return MESSAGES.REQUIRED_FIELD;

    return true;
  }

  function validateForm() {
    isFormValid.value =
      validateName() == true &&
      validateValue() == true &&
      validateParcels() == true &&
      validateDueDate() == true;
  }

  function submitForm() {
    emit(
      "submitForm",
      billName.value,
      billValue.value,
      billParcels.value,
      billDueDate.value
    );
  }

  function backPage() {
    emit("backPage");
  }
</script>

<template>
  <v-container
    class="custom-container px-md-16 py-8 py-md-16 border-sm border-opacity-100 border-primary rounded-xl my-auto align-center"
  >
    <v-row class="h-100" justify="center">
      <v-col cols="12" md="6">
        <div class="d-flex align-center justify-space-between">
          <v-icon
            @click="backPage"
            color="primary"
            icon="mdi-arrow-left"
            size="x-large"
          ></v-icon>

          <div class="d-flex align-center">
            <div class="text-h5 text-sm-h4 text-md-h4 text-lg-h3 text-primary">
              Gestor Financeiro
            </div>
            <v-img
              :width="40"
              aspect-ratio="16/9"
              cover
              src="https://icons.iconarchive.com/icons/graphicloads/polygon/256/dollar-icon.png"
            ></v-img>
          </div>
        </div>

        <div class="text-h6 text-md-h5 text-lg-h5 mt-8 text-center">
          Vamos adicionar sua conta a prazo!
        </div>
        <p class="mt-5">
          Para começar a gerenciar suas compras a prazo, preencha o formulário
          com as informações solicitadas. Após isso, registre a conta e
          confira-a na sua lista de contas.
        </p>
      </v-col>
      <v-col cols="12" md="6" class="my-auto">
        <div class="text-h6 text-md-h5 text-lg-h5">Formulário</div>
        <v-form class="mt-4 h-auto">
          <v-text-field
            class="mb-3"
            v-model="billName"
            label="Nome"
            variant="outlined"
            density="compact"
            color="primary"
            :rules="[validateName]"
            @input="validateForm"
          ></v-text-field>
          <v-text-field
            class="mb-3"
            v-model="billValue"
            label="Valor"
            prefix="R$"
            type="number"
            variant="outlined"
            density="compact"
            color="primary"
            :rules="[validateValue]"
            @input="validateForm"
          ></v-text-field>
          <v-text-field
            class="mb-3"
            v-model="billParcels"
            label="Quantidade de Parcelas"
            type="number"
            variant="outlined"
            density="compact"
            color="primary"
            :rules="[validateParcels]"
            @input="validateForm"
          ></v-text-field>
          <v-text-field
            class="mb-3"
            v-model="billDueDate"
            label="Vencimento 1ª parcela"
            type="date"
            variant="outlined"
            density="compact"
            color="primary"
            :rules="[validateDueDate]"
            @input="validateForm"
          ></v-text-field>
          <div class="text-end">
            <v-btn
              append-icon="mdi-send"
              color="primary"
              @click="submitForm"
              :disabled="!isFormValid"
            >
              Cadastrar
            </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<style></style>
