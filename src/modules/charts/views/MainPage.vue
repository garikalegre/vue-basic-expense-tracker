<template>
  <div class="mt-16 d-flex flex-column align-center">
    <div class="pa-6 w100">
      <h2 class="text-center my-5">Expense Trend</h2>
      <LineChart></LineChart>
    </div>
    <div
      class="my-5 pa-6 d-flex flex-sm-column flex-md-row expense-info align-sm-center justify-space-between"
    >
      <span>Expanse</span>
      <span>total: {{ (total).toFixed(2) }}</span>
    </div>
    <div class="pa-6 w100">
      <h3 class="text-center my-5">Expanses</h3>
      <ExpenseDataTable></ExpenseDataTable>
    </div>
  </div>
</template>

<script>
import ExpenseDataTable from "@/modules/charts/components/ExpenseDataTable";
import LineChart from "@/modules/charts/components/LineChart";

export default {
  name: "MainPage",
  components: {
    ExpenseDataTable,
    LineChart
  },
  computed: {
    total() {
      const expenses = this.$store.getters.getExpenses;
      const prices = expenses.map(item => Number(item.price));

      return prices.length
        ? prices.reduce(
            (accumulator, currentValue) => accumulator + currentValue
          )
        : 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.expense-info {
  font-size: 12px;
  font-weight: bold;
  border: 1px solid #ff0000;
  width: 95%;
}
</style>
