import DetailsBill from "@/views/DetailsBill.vue";
import ListBills from "@/views/ListBills.vue";
import RegisterBill from "@/views/RegisterBill.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/Register",
      name: "RegisterBill",
      component: RegisterBill,
    },
    {
      path: "/",
      name: "ListBills",
      component: ListBills,
    },
    {
      path: "/details/:id",
      name: "DetailsBill",
      component: DetailsBill,
      props: true,
    },
  ],
});

export default router;
