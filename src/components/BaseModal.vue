<template>
  <transition name="modal">
    <div
      class="o-modal__mask"
      :aria-label="label"
      role="dialog"
      aria-modal="true"
    >
      <div class="o-modal__wrapper">
        <div class="o-modal__container">
          <header class="o-modal__header">
            <slot name="header"> default header </slot>
            <button
              @click="$emit('close')"
              ref="closeButton"
              aria-label="Close modal"
              class="closeBtn"
              @keydown.esc="$emit('close')"
            >
              <BaseIcon name="fas fa-times" />
            </button>
          </header>
          <section class="o-modal__body">
            <slot name="body"> default body </slot>
          </section>
          <footer class="o-modal__footer">
            <slot name="footer"> default footer </slot>
          </footer>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseIcon from "@/components/BaseIcon.vue";
export default defineComponent({
  name: "BaseModal",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  components: {
    BaseIcon,
  },
  mounted() {
    (this.$refs.closeButton as HTMLElement).focus();
  },
});
</script>
<style lang="scss">
@import "~@/assets/scss/colors.scss";

.o-modal__mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.o-modal__wrapper {
  display: table-cell;
  vertical-align: middle;
}

.o-modal__container {
  height: 500px;
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: $white_0;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;

  .closeBtn {
    padding: 6px 10px;
    border: none;
    cursor: pointer;
    float: right;
  }
}

.o-modal__header h3 {
  display: inline-block;
  margin-top: 0;
  color: $accent_0;
}

.o-modal__body {
  margin: 20px 0;
}

/* Style for modal animation*/

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
