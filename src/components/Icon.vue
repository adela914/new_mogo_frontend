<template>
  <i :class="name"></i>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Icon",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
});
</script>
<style></style>
