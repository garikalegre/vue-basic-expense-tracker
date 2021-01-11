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
          item-value="name"
          label="Expense types"
          required
        ></v-select>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateFormatted"
              label="Date"
              hint="MM/DD/YYYY format"
              persistent-hint
              prepend-icon="mdi-calendar-month-outline"
              v-bind="attrs"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            @input="menu = false"
          ></v-date-picker>
        </v-menu>
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
  data(vm) {
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
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu: false,
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
          type: this.type,
          date: this.date
        };
        this.$store.dispatch("saveExpense", payload);
        this.snackbar = true;
        this.$refs.form.reset();
      }
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  },
  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    }
  }
};
</script>

<style lang="scss" scoped>
.expense-form-wrapper {
  max-width: 350px;
}
</style>
