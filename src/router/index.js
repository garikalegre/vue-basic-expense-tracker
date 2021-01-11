import Vue from "vue";
import VueRouter from "vue-router";
import expenseRoutes from "@/modules/expenseRoutes";

Vue.use(VueRouter);

const routes = [...expenseRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
