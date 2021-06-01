<template>
  <article>
    <TheHeader />
    <main>
      <router-view />
    </main>
    <TheFooter />
  </article>
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

html,
body,
#app {
  width: 100%;
  height: 100%;
}

article {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

header,
main,
footer {
  flex-shrink: 0;
}

main {
  flex-grow: 1;
  background-color: $white_0;
}
</style>
