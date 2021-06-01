<template>
  <div class="o-baseInput">
    <input
      class="o-baseInput__field"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <BaseIcon
      v-if="type === 'search'"
      name="fas fa-search o-baseInput__prefixIcon"
    />
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
    placeholder: {
      type: String,
      required: false,
      default: "Search",
    },
  },
});
</script>
<style lang="scss" scoped>
@import "~@/assets/scss/colors.scss";
.o-baseInput {
  display: inline-block;
  position: relative;
}

.o-baseInput__field {
  background-color: #f3f3f4;
  border-radius: 8px;
  outline: none;
  border: 1px solid transparent;
  padding: 10px 16px;
  display: block;
  width: 100%;

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

/* Style for native clear icon */
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

.o-baseInput__prefixIcon {
  position: absolute;
  left: 10px;
  top: 11px;
  color: $placeholder_grey;
}
</style>
