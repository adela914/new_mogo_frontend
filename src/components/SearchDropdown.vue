<template>
  <div class="m-searchDropdown">
    <BaseInput v-model="inputValue" type="search" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseInput from "@/components/BaseInput.vue";

export default defineComponent({
  name: "SearchDropdown",
  components: {
    BaseInput,
  },
  data() {
    return {
      inputValue: "",
    };
  },
});
</script>

<style></style>
