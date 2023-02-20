<template>
  <div id="app">
    <PageHeader />
    <main class="main">
      <div class="container">
        <router-view />
      </div>
    </main>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader.vue";
import PageFooter from "@/components/common/PageFooter.vue";
import "@/assets/css/main.css";

export default {
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>

<style lang="scss"></style>
