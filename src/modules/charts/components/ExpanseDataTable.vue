<template>
  <v-data-table
    :headers="headers"
    :items="expenses"
    :items-per-page="5"
    class="elevation-1 my-5"
  ></v-data-table>
</template>

<script>
export default {
  name: "ExpanseDataTable",
  data() {
    return {
      headers: [
        {
          text: "Expense name",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Price", value: "price" },
        { text: "Category", value: "type" },
        { text: "Date", value: "date" }
      ]
    };
  },
  computed: {
    expenses() {
      return this.$store.getters.getExpenses;
    }
  }
};
</script>
