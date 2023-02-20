import Vue from "vue";
import Vuex from "vuex";
import productsStore from "./products";
import cartStore from "./cart";
import authStore from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    productsStore,
    cartStore,
    authStore,
  },
});
