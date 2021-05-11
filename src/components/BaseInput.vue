<template>
  <div class="inputField">
    <input
      class="input"
      :value="modelValue"
      :type="type"
      placeholder="Search"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <BaseIcon v-if="type === 'search'" name="fas fa-search" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseIcon from "@/components/BaseIcon.vue";
export default defineComponent({
  name: "BaseInput",
  emits: ["update:modelValue"],
  components: {
    BaseIcon,
  },
  props: {
    modelValue: {
      type: String,
    },
    type: {
      type: String,
      required: false,
    },
  },
});
</script>
<style lang="scss" scoped>
@import "~@/assets/scss/colors.scss";
.inputField {
  display: inline-block;
  position: relative;
}

.input {
  background-color: #f3f3f4;
  border-radius: 8px;
  outline: none;
  border: 1px solid transparent;
  padding: 10px 16px;

  &:hover,
  &:focus {
    background-color: $white_0;
    box-shadow: 0 0 0 4px rgba(248, 225, 245, 0.879);
  }
}

::placeholder {
  color: $placeholder_grey;
  opacity: 1; /* Firefox */
}

input[type="search"] {
  padding-left: 32px;

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 1em;
    width: 1em;
    border-radius: 50em;
    background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg)
      no-repeat 50% 50%;
    background-size: contain;
    opacity: 0;
    pointer-events: none;
  }

  &:focus::-webkit-search-cancel-button {
    opacity: 0.3;
    pointer-events: all;
  }
}

.baseIcon {
  position: absolute;
  left: 10px;
  top: 11px;
  color: $placeholder_grey;
}
</style>
