<template>
  <div class="card">
    <img :src="'/' + data.image" alt="image" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title card-title-reg">{{ data.name }}</h3>
      </div>
      <div class="card-info">
        <div class="ingredients">{{ data.description }}</div>
      </div>
      <div class="card-buttons">
        <button
          class="button button-primary button-add-cart"
          @click="addToCart"
        >
          <span class="button-card-text">В корзину</span>
          <span class="button-cart-svg"></span>
        </button>
        <strong class="card-price-bold">{{ data.price }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", {
        data: this.data,
        quantity: 1,
      });

      this.$store.commit("toggleModal", true);
    },
  },
};
</script>
