<template>
  <footer class="footer">
    <p>Made with 💜 in Berlin</p>
    <a href="https://www.linkedin.com/in/kyunghwa5/" target="_blank"
      ><Icon name="fab fa-linkedin"
    /></a>
    <a href="https://github.com/adela914" target="_blank"
      ><Icon name="fab fa-github-alt"
    /></a>
  </footer>
</template>

<script>
import { defineComponent } from "vue";
import Icon from "@/components/Icon.vue";
export default defineComponent({
  name: "TheFooter",
  components: {
    Icon,
  },
});
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/colors.scss";

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: $footer_grey;

  i {
    color: grey;
    padding: 4px 12px;
    font-size: 28px;
  }
}
</style>
