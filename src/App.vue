<template>
  <div>
    <TheHeader />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "@/components/TheHeader.vue";

export default defineComponent({
  name: "Home",
  components: {
    TheHeader,
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
