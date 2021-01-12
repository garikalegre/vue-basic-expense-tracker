<template>
  <div class="mt-16 d-flex flex-column align-center">
    <div class="pa-6 w100">
      <h2 class="text-center my-5">Expense Trend</h2>
      <LineChart></LineChart>
    </div>
    <div class="pa-6 w100">
      <h3 class="text-center my-5">Expanses</h3>
      <ExpanseDataTable></ExpanseDataTable>
    </div>
  </div>
</template>

<script>
import ExpanseDataTable from "@/modules/charts/components/ExpanseDataTable";
import LineChart from "@/modules/charts/components/LineChart";

export default {
  name: "MainPage",
  components: {
    ExpanseDataTable,
    LineChart
  }
};
</script>

<style lang="scss" scoped></style>
