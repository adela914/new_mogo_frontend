<template>
  <nav class="navbar">
    <div class="navbar__logo">
      <router-link to="/">MOGO</router-link>
    </div>
    <!-- <ul class="navbar__menu" :class="{ active: openHeader }">
      <li><a href="">Home</a></li>
      <li><a href="">Gallery</a></li>
      <li><a href="">Weddings</a></li>
      <li><a href="">FAQ</a></li>
      <li><a href="">Bookings</a></li>
    </ul> -->
    <div class="navbar__login" :class="{ active: openHeader }">
      <router-link to="signin">Sign In</router-link>
      <router-link to="signup"
        ><BaseButton name="Sign Up" @click="signUpBtnClicked"
      /></router-link>
    </div>
    <div class="navbar__toggleBtn">
      <BaseIcon
        :name="openHeader ? 'fas fa-times' : 'fas fa-bars'"
        @click="toggleHeader"
      />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseIcon from "@/components/BaseIcon.vue";
import BaseButton from "@/components/BaseButton.vue";

export default defineComponent({
  name: "TheHeader",
  components: {
    BaseIcon,
    BaseButton,
  },
  data() {
    return {
      openHeader: false,
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

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background-color: $white_0;
  height: 80px;
  box-shadow: inset 0px -1px 0px #f3f3f4;
}

.navbar__logo {
  font-size: 24px;
  color: $accent_0;
  padding: 10px;
}

.navbar__menu {
  display: flex;
  padding-left: 0;
  list-style: none;

  li {
    padding: 8px 12px;
  }
}

.navbar__menu .navbar__menu li:hover {
  text-decoration: underline wavy;
  text-underline-offset: 2px;
}

.navbar__login {
  list-style: none;
  color: $accent_0;
  display: flex;
  padding-left: 0;
  align-items: center;

  .baseButton {
    margin-left: 18px;
  }
}

.navbar__toggleBtn {
  display: none;
  position: absolute;
  right: 32px;
  font-size: 24px;
  cursor: pointer;
  color: var(--accent-color);
}

@media screen and (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 24px;
    height: auto;
    box-shadow: none;
  }

  .navbar__menu {
    display: none;
    flex-direction: column;
    text-align: center;
    width: 100%;
    box-shadow: inset 0px 4px 0px -3px #f3f3f4;
  }

  .navbar__menu a {
    display: block;
  }

  .navbar__login {
    display: none;
    justify-content: center;
    width: 100%;
  }

  .navbar__toggleBtn {
    display: block;
    padding: 10px;
  }

  .navbar__menu.active,
  .navbar__login.active {
    display: flex;
  }
}
</style>
