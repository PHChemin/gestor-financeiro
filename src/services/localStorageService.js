import { ref } from "vue";

export const bills = ref(JSON.parse(localStorage.getItem("bills")) || []);

export function saveBill(bill) {
  bills.value.push(bill);
  localStorage.setItem("bills", JSON.stringify(bills.value));
}

export function getBills() {
  return bills.value;
}

export function getBillById(id) {
  for (let i = 0; bills.value.length; i++) {
    if (bills.value[i].id == id) return bills.value[i];
  }
}
