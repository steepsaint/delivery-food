export default {
  state: () => ({
    cartItems: [],
    isModalOpened: false,
  }),
  mutations: {
    addToCart(state, cartItems) {
      state.cartItems.push(cartItems);
    },
    removeFromCart(state, cartItems) {
      state.cartItems = state.cartItems.filter(
        (item) => item.data !== cartItems.data
      );
    },
    toggleModal(state, value) {
      state.isModalOpened = value;
    },
    updateQuantity(state, value) {
      state.cartItems.map((item) => {
        if (item.data === value.data) {
          item.quantity = value.quantity;
        }
      });
    },
  },
};
