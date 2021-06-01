<template>
  <header class="header">
    <div class="header__logo">
      <router-link to="/">MOGO</router-link>
    </div>
    <div>
      <BaseInput v-model="inputValue" type="search" />
    </div>
    <div class="header__login" :class="{ active: openHeader }">
      <router-link to="signin">Sign In</router-link>
      <router-link to="signup"
        ><BaseButton name="Sign Up" @click="signUpBtnClicked"
      /></router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";

export default defineComponent({
  name: "TheHeader",
  components: {
    BaseButton,
    BaseInput,
  },
  data() {
    return {
      openHeader: false,
      inputValue: "",
    };
  },
  methods: {
    toggleHeader() {
      this.openHeader = !this.openHeader;
    },
    signUpBtnClicked() {
      console.log("sign up");
    },
  },
});
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/colors.scss";

.header {
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background-color: $white_0;
  height: 80px;
  box-shadow: inset 0px -1px 0px #f3f3f4;
}

.header__logo {
  font-size: 24px;
  color: $accent_0;
  padding: 10px;
}

.header__login {
  list-style: none;
  color: $accent_0;
  display: flex;
  padding-left: 0;
  align-items: center;

  .baseButton {
    margin-left: 18px;
  }
}
</style>
