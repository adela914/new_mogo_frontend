<template>
  <div>
    <TheHeader />
    <main>
      <router-view />
    </main>
    <the-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default defineComponent({
  name: "Home",
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      tabIndex: 0,
    };
  },
});
</script>
<style lang="scss">
@import "~@/assets/scss/colors.scss";
@import "~@/assets/scss/main.scss";

main {
  background-color: $white;
}
</style>
