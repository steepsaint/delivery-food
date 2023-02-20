<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="footer-block">
          <SvgLoader name="logo" alt="logo" />
          <NavMenu navClass="footer-nav" />
          <div class="social-links">
            <a href="#" class="social-link">
              <SvgLoader name="instagram" alt="instagram" />
            </a>
            <a href="#" class="social-link">
              <SvgLoader name="fb" alt="facebook" />
            </a>
            <a href="#" class="social-link">
              <SvgLoader name="vk" alt="vk" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import NavMenu from "./NavMenu.vue";
import SvgLoader from "./SvgLoader.vue";
export default {
  components: {
    SvgLoader,
    NavMenu,
  },
};
</script>
