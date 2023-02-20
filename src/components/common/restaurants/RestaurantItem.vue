<template>
  <div>
    <router-link
      :to="{ name: 'restaurant', params: { id: data.products } }"
      class="card card-restaurant"
    >
      <img :src="data.image" alt="image" class="card-image" />
      <div class="card-text">
        <div class="card-heading">
          <h3 class="card-title">{{ data.name }}</h3>
          <span class="card-tag tag">{{ data.time_of_delivery }}</span>
        </div>
        <div class="card-info">
          <div class="rating">{{ data.stars }}</div>
          <div class="price">{{ data.price }}</div>
          <div class="category">{{ data.kitchen }}</div>
        </div>
      </div>
    </router-link>
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
};
</script>
