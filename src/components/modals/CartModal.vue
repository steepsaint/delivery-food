<template>
  <div class="modal modal-cart" :class="{ 'is-open': modalState }">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-title">Корзина</h3>
        <button class="close" @click="closeModal">&times;</button>
      </div>
      <div class="modal-body">
        <div
          class="food-row"
          v-for="(item, index) in data"
          :key="item.data.name + index"
        >
          <span class="food-name">{{ item.data.name }}</span>
          <strong class="food-price">{{ item.data.price }} ₽</strong>
          <div class="food-counter">
            <button class="counter-button" @click="productDecrement(item)">
              -
            </button>
            <span class="counter">{{ item.quantity }}</span>
            <button class="counter-button" @click="productIncrement(item)">
              +
            </button>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <span class="modal-pricetag">{{ totalPrice }} ₽</span>
        <div class="footer-buttons">
          <button class="button button-primary">Оформить заказ</button>
          <button class="button clear-cart" @click="closeModal">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  computed: {
    totalPrice() {
      const price = this.$store.state.cartStore.cartItems || [];
      return price.reduce((acc, current) => {
        acc = current.quantity * current.data.price + acc;
        return acc;
      }, 0);
    },
    modalState() {
      return this.$store.state.cartStore.isModalOpened || false;
    },
  },
  methods: {
    closeModal() {
      this.$store.commit("toggleModal", false);
    },
    productDecrement(product) {
      if (product.quantity >= 2) {
        this.$store.commit("updateQuantity", {
          ...product,
          quantity: product.quantity - 1,
        });
      }
    },
    productIncrement(product) {
      this.$store.commit("updateQuantity", {
        ...product,
        quantity: product.quantity + 1,
      });
    },
  },
};
</script>
