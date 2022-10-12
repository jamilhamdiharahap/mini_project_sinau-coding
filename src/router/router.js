import { createRouter, createWebHistory } from "vue-router";

import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Supplier from "../pages/Supplier.vue";
import TambahBarang from "../pages/TambahBarang.vue";
import TambahSupplier from "../pages/TambahSupplier.vue";
import UpdateBarang from "../pages/UpdateBarang.vue";
import UpdateSupplier from "../pages/UpdateSupplier.vue";
import Dashboard from "../pages/dashboard.vue";
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/supplier",
    name: "Supplier",
    component: Supplier,
  },
  {
    path: "/tambah-barang",
    name: "tambahBarang",
    component: TambahBarang,
  },
  {
    path: "/tambah-supplier",
    name: "tambahSupplier",
    component: TambahSupplier,
  },
  {
    path: "/update-barang/:id",
    name: "UpdateBarang",
    component: UpdateBarang,
  },
  {
    path: "/update-supplier",
    name: "UpdateSupplier",
    component: UpdateSupplier,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.url.BASE_URL),
  routes,
});

export default router;