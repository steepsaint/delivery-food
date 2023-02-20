<template>
  <div>
    <PagePromo
      name="pizza"
      title="Онлайн-сервис доставки еды на дом"
      desc="Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком"
    />
    <section class="restaurants">
      <div class="section-heading">
        <h2 class="section-title">Рестораны</h2>
        <PageSearch
          labelClass="search"
          inputClass="input-search"
          inputPlaceholder="Поиск блюд и ресторанов"
        />
      </div>
      <div class="cards cards-restaurants">
        <RestaurantItem
          v-for="(item, index) in products"
          :key="item.name + index"
          :data="item"
        />
      </div>
    </section>
  </div>
</template>

<script>
import PagePromo from "@/components/common/PagePromo.vue";
import PageSearch from "@/components/common/PageSearch.vue";
import RestaurantItem from "@/components/common/restaurants/RestaurantItem.vue";
export default {
  components: {
    PagePromo,
    PageSearch,
    RestaurantItem,
  },
  data: function () {
    return {
      restaurantsList: [],
    };
  },
  computed: {
    products() {
      return this.$store.state.productsStore.products || [];
    },
  },
  mounted() {
    try {
      this.$store.dispatch("getProducts");
    } catch {
      alert("Error request");
    }
  },
};
</script>
