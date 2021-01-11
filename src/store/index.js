import Vue from "vue";
import Vuex from "vuex";
import expense from "./expense";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    expense
  }
});
