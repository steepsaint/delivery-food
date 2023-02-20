<template>
  <div>
    <section class="container-promo">
      <section class="promo" :class="name">
        <h1 class="promo-title">{{ title }}</h1>
        <p class="promo-text">
          {{ desc }}
        </p>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
  },
};
</script>
