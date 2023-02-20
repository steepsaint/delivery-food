<template>
  <div>
    <label :class="labelClass">
      <input
        type="text"
        class="input"
        :class="inputClass"
        :placeholder="inputPlaceholder"
      />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    labelClass: {
      type: String,
      required: true,
    },
    inputClass: {
      type: String,
      required: true,
    },
    inputPlaceholder: {
      type: String,
      required: true,
    },
  },
};
</script>
