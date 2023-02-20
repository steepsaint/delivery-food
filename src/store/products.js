export default {
  state: () => ({
    products: [],
  }),
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async getProducts(store) {
      const data = await fetch(`/data/partners.json`);
      store.commit("setProducts", await data.json());
    },
  },
};
