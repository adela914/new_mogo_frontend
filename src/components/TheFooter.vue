<template>
  <footer class="o-footer">
    <p>Made with 💜 in Berlin</p>
    <a href="https://www.linkedin.com/in/kyunghwa5/" target="_blank"
      ><BaseIcon name="fab fa-linkedin"
    /></a>
    <a href="https://github.com/adela914" target="_blank"
      ><BaseIcon name="fab fa-github-alt"
    /></a>
  </footer>
</template>

<script>
import { defineComponent } from "vue";
import BaseIcon from "@/components/BaseIcon.vue";
export default defineComponent({
  name: "TheFooter",
  components: {
    BaseIcon,
  },
});
</script>

<style lang="scss">
@import "~@/assets/scss/colors.scss";

.o-footer {
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
