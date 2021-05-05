<template>
  <button class="button">
    {{ name }}
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "Button",
  props: {
    name: {
      required: true,
      type: String as PropType<string>,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/colors.scss";

// TODO: make it respostve, hide text and show an icon in smaller size
.button {
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  padding: 10px;

  &:hover {
    background-color: $hover_grey; // TODO: add transparant
  }
}
</style>
