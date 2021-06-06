<template>
  <div class="m-baseCard">
    <div class="m-baseCard__img">
      <img :src="imgSrc" alt="food" />
    </div>
    <div class="m-baseCard__content">
      <h1>{{ title }}</h1>
      <h>{{ subTitle }}</h>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseCard",
  props: {
    title: {
      required: true,
      type: String,
    },
    subTitle: {
      required: true,
      type: String,
    },
    imgSrc: {
      required: true,
      type: String,
    },
  },
});
</script>

<style lang="scss">
@import "~@/assets/scss/colors.scss";

.m-baseCard {
  width: 300px;
  border-radius: 8px;
  border: 1px solid $border_grey;
  display: flex;
  flex-direction: column;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 8px;
  }

  .m-baseCard__content {
    padding: 20px;
  }
}
</style>
