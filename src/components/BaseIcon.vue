<template>
  <i :class="name" class="baseIcon"></i>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
});
</script>
<style></style>
