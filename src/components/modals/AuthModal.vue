<template>
  <div class="modal-auth" :class="{ 'is-open': modalState }">
    <div class="modal-dialog modal-dialog-auth">
      <button class="close-auth" @click="closeModal">&times;</button>
      <form id="logInForm">
        <fieldset class="modal-body">
          <legend class="modal-title">Авторизация</legend>
          <label class="label-auth">
            <span>Логин</span>
            <input id="login" type="text" />
          </label>
          <label class="label-auth">
            <span>Пароль</span>
            <input id="password" type="password" />
          </label>
        </fieldset>
        <div class="modal-footer">
          <div class="footer-buttons">
            <button class="button button-primary button-login" type="submit">
              Войти
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    modalState() {
      return this.$store.state.authStore.isModalOpened || false;
    },
  },
  methods: {
    closeModal() {
      this.$store.commit("toggleAuthModal", false);
    },
  },
};
</script>
