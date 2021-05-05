<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Input",
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: String,
    },
  },
});
</script>
