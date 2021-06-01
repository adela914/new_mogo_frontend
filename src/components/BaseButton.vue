<template>
  <button class="baseButton" role="button" type="button">
    {{ name }}
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "BaseButton",
  props: {
    name: {
      required: false,
      default: "",
      type: String as PropType<string>,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/colors.scss";

// TODO: make it respostve, hide text and show an icon in smaller size
.baseButton {
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
