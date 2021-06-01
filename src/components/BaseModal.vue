<template>
  <transition name="modal">
    <div class="modal-mask" :aria-label="label" role="dialog" aria-modal="true">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"> default header </slot>
            <button
              @click="$emit('close')"
              ref="closeButton"
              class="closeBtn"
              @keydown.esc="$emit('close')"
            >
              <BaseIcon name="fas fa-times" />
            </button>
          </div>

          <div class="modal-body">
            <slot name="body"> default body </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer"> default footer </slot>
          </div>
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
<style lang="scss" scoped>
@import "~@/assets/scss/colors.scss";

.modal-mask {
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

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  height: 500px;
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: $white_0;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

::v-deep .modal-header h3 {
  display: inline-block;
  margin-top: 0;
  color: $accent_0;
}

.modal-body {
  margin: 20px 0;
}

.closeBtn {
  padding: 6px 10px;
  border: none;
  cursor: pointer;
  float: right;
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
