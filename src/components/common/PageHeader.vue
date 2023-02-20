<template>
  <div class="container">
    <header class="header">
      <a class="logo">
        <SvgLoader name="logo" alt="logo" />
      </a>
      <PageSearch
        labelClass="address"
        inputClass="input-address"
        inputPlaceholder="Адрес доставки"
      />
      <div class="buttons">
        <span class="user-name"></span>
        <button class="button button-primary button-auth" @click="openModal">
          <span class="button-auth-svg"></span>
          <span class="button-text">Войти</span>
        </button>
        <button class="button button-cart" id="cart-button">
          <span class="button-cart-svg"></span>
          <span class="button-text">Корзина</span>
        </button>
        <button class="button button-primary button-out">
          <span class="button-text">Выйти</span>
          <span class="button-out-svg"></span>
        </button>
      </div>
    </header>
    <AuthModal />
  </div>
</template>

<script>
import SvgLoader from "./SvgLoader.vue";
import PageSearch from "./PageSearch.vue";
import AuthModal from "../modals/AuthModal.vue";

export default {
  components: {
    SvgLoader,
    PageSearch,
    AuthModal,
  },
  methods: {
    openModal() {
      this.$store.commit("toggleAuthModal", true);
    },
  },
};
</script>
