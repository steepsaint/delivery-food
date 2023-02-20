<template>
  <div class="restaurant">
    <section class="menu">
      <div class="section-heading" v-if="currentRestaurant">
        <h2 class="section-title restaurant-title">
          {{ currentRestaurant.name }}
        </h2>
        <div class="card-info">
          <div class="rating">{{ currentRestaurant.stars }}</div>
          <div class="price">{{ currentRestaurant.price }}</div>
          <div class="category">{{ currentRestaurant.kitchen }}</div>
        </div>
      </div>
      <div v-if="!$route.params.id || !restaurantData.length">
        <h2>Empty</h2>
      </div>
      <div v-else class="cards cards-menu">
        <RestaurantMenuItem
          v-for="item in restaurantData"
          :key="item.id + item.name"
          :data="item"
        />
      </div>
    </section>
    <CartModal :data="cartItems" />
  </div>
</template>

<script>
import RestaurantMenuItem from "@/components/common/restaurants/RestaurantMenuItem.vue";
import CartModal from "@/components/modals/CartModal.vue";
export default {
  components: {
    RestaurantMenuItem,
    CartModal,
  },
  computed: {
    cartItems() {
      return this.$store.state.cartStore.cartItems;
    },
    currentRestaurant() {
      const products = this.$store.state.productsStore?.products || [];

      return products.find((item) => {
        return item.products === this.$route.params.id;
      });
    },
  },
  data: function () {
    return {
      restaurantData: [],
      addedToCart: [],
    };
  },
  methods: {
    async getRestaurants(id) {
      const data = await fetch(`/data/${id}.json`);
      return data.json();
    },
  },
  watch: {
    $route: {
      async handler(to) {
        try {
          this.restaurantData = await this.getRestaurants(to.params.id);
        } catch (e) {
          new Error(e);
          alert("Error request");
        }
      },
      immediate: true,
    },
  },
  async mounted() {
    const products = this.$store.state.productsStore?.products || [];

    if (!products.length) {
      try {
        await this.$store.dispatch("getProducts");
      } catch {
        alert("Error request");
      }
    }
  },
};
</script>
