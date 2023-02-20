export default {
  state: () => ({
    cartItems: [],
    isModalOpened: false,
  }),
  mutations: {
    toggleAuthModal(state, value) {
      state.isModalOpened = value;
    },
  },
};
