<template>
  <div class="mt-16 d-flex flex-column align-center">
    <div class="pa-4">
      <h2 class="text-center">Charts</h2>
    </div>
    <div class="pa-4">
      <h3 class="text-center">Expanses</h3>
      <ExpanseDataTable></ExpanseDataTable>
    </div>
  </div>
</template>

<script>
import ExpanseDataTable from "@/modules/charts/components/ExpanseDataTable";
export default {
  name: "MainPage",
  components: {
    ExpanseDataTable
  }
};
</script>

<style scoped></style>
