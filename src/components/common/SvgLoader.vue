<template>
  <img :src="image" :alt="alt" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
    },
  },
  data() {
    return {
      image: require(`@/assets/icons/${this.name}.svg?inline`),
    };
  },
};
</script>
