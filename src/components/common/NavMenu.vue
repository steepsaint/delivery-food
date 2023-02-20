<template>
  <div>
    <nav :class="navClass">
      <a href="#" class="footer-link">Ресторанам </a>
      <a href="#" class="footer-link">Курьерам</a>
      <a href="#" class="footer-link">Пресс-центр</a>
      <a href="#" class="footer-link">Контакты</a>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    navClass: {
      type: String,
    },
  },
};
</script>
