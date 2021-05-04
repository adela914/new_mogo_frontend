<template>
  <main>
    main
    <!-- <Tabs
      v-model="tabIndex"
      :tabs="{ day: false, month: false, year: false }"
    /> -->
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Tabs from "@/components/Tabs.vue";

export default defineComponent({
  name: "Home",
  components: {
    // Tabs,
  },
  data() {
    return {
      tabIndex: 0,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "~@/assets/scss/colors.scss";

main {
  background-color: $white;
}
</style>
