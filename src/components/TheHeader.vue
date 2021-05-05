<template>
  <nav class="navbar">
    <div class="navbar__logo">
      <a href="">MOGO</a>
    </div>
    <ul class="navbar__menu" :class="{ active: openHeader }">
      <li><a href="">Home</a></li>
      <li><a href="">Gallery</a></li>
      <li><a href="">Weddings</a></li>
      <li><a href="">FAQ</a></li>
      <li><a href="">Bookings</a></li>
    </ul>
    <div class="navbar__login" :class="{ active: openHeader }">Login</div>
    <div class="navbar__toggleBtn">
      <Icon name="fas fa-bars" @click="toggleHeader" />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Icon from "@/components/Icon.vue";
export default defineComponent({
  name: "TheHeader",
  components: {
    Icon,
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
  },
});
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/colors.scss";

/* Nav container */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background-color: --background-color;
}

/* Logo with text */
.navbar__logo {
  font-size: 24px;
  color: $accent_0;
}

.navbar__logo i {
  color: $accent_0;
}

/* Menu */
.navbar__menu {
  display: flex;
  padding-left: 0;
  list-style: none;
}

.navbar__menu li {
  padding: 8px 12px;
}

.navbar__menu li:hover {
  text-decoration: underline wavy;
  text-underline-offset: 2px;
}

.navbar__login {
  list-style: none;
  color: $accent_0;
  display: flex;
  padding-left: 0;
}

/* Toggle button */
.navbar__toggleBtn {
  display: none;
  position: absolute;
  right: 32px;
  font-size: 24px;
  cursor: pointer;
  color: var(--accent-color);
}

/* For small screen */
@media screen and (max-width: 768px) {
  /* Nav container */
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 24px;
  }

  /* Menu */
  .navbar__menu {
    display: none;
    flex-direction: column;
    text-align: center;
    width: 100%;
  }

  .navbar__menu a {
    /* Fill in an entire line so that user can click on any space */
    display: block;
  }

  /* Icons */
  .navbar__login {
    display: none;
    justify-content: center;
    width: 100%;
  }

  /* Toggle button */
  .navbar__toggleBtn {
    display: block;
  }

  /* When toggle button is clicked - active state */
  .navbar__menu.active,
  .navbar__login.active {
    display: flex;
  }
}
</style>
