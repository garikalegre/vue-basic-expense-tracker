<template>
  <div class="d-flex flex-column align-center mt-16 pa-3">
    <h2 class="text-center mt-4">Add Expense</h2>
    <div class="expense-form-wrapper mt-8">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          :counter="15"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>
        <vuetify-money
          label="Price"
          v-model="price"
          :rules="priceRules"
          required
        ></vuetify-money>
        <v-select
          v-model="type"
          :items="types"
          :rules="typeRules"
          item-text="name"
          item-value="id"
          label="Expense types"
          required
        ></v-select>
        <v-btn outlined color="success" class="mt-4" @click="submit"
          >Save</v-btn
        >
      </v-form>
      <v-snackbar
        bottom
        color="green lighten-2"
        v-model="snackbar"
        timeout="4000"
        >Expanse stored. You can add a new one</v-snackbar
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "AddExpense",
  data() {
    return {
      valid: true,
      name: null,
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 15 characters"
      ],
      price: null,
      priceRules: [v => !!v || "Price is required"],
      type: null,
      typeRules: [v => !!v || "Select type"],
      snackbar: false
    };
  },
  computed: {
    types() {
      return this.$store.getters.getExpensesTypes;
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const payload = {
          name: this.name,
          price: this.price,
          type: this.type
        };
        this.$store.dispatch("saveExpense", payload);
        this.snackbar = true;
        this.$refs.form.reset();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.expense-form-wrapper {
  max-width: 350px;
}
</style>
