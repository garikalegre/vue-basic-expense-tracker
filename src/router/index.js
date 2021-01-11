import Vue from "vue";
import VueRouter from "vue-router";
import expenseRoutes from "@/modules/expenseRoutes";
import chartsRoutes from "@/modules/charts/chartsRoutes";

Vue.use(VueRouter);

const routes = [...expenseRoutes, ...chartsRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
