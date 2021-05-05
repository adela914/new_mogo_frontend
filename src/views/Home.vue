<template>
  <div>
    <p>Components Libraries</p>
    <Button name="my button" />
    <Input v-model="inputValue" />
    <!-- <Tabs
      v-model="tabIndex"
      :tabs="{ day: false, month: false, year: false }"
    /> -->
    <p>{{ inputValue }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
// import Tabs from "@/components/Tabs.vue";

export default defineComponent({
  name: "Home",
  components: {
    // Tabs,
    Button,
    Input,
  },
  data() {
    return {
      tabIndex: 0,
      inputValue: "",
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
