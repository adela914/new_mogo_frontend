<template>
  <div class="o-dropdown" ref="menu">
    <slot name="head"></slot>
    <button
      :disabled="disabled"
      class="o-dropdown__button"
      :class="{ isOpen }"
      :aria-expanded="isOpen.toString()"
      :aria-controls="dropdownId"
      @click="toggleOpen"
    >
      <slot name="button"></slot>
      <BaseIcon name="fas fa-chevron-down" :class="{ toggleUp: isOpen }" />
    </button>
    <div
      class="o-dropdown__menu"
      :id="dropdownId"
      :hidden="!isOpen"
      @click="closeHandler"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseIcon from "@/components/BaseIcon.vue";
export default defineComponent({
  name: "BaseDropdown",
  components: {
    BaseIcon,
  },
  data: () => {
    return {
      isOpen: false,
    };
  },

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    dropdownId: {
      type: String,
      required: true,
    },
  },
  created() {
    document.addEventListener("click", this.documentClick);
  },
  mounted() {
    window.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        this.closeHandler();
      }
    });
  },
  unmounted: function () {
    document.removeEventListener("keyup", this.closeHandler);
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    },
    documentClick(e: MouseEvent) {
      let el = this.$refs.menu as HTMLElement;
      let target = e.target as Node;
      if (el && el !== target && !el.contains(target)) {
        this.closeHandler();
      }
    },
    closeHandler() {
      this.isOpen = false;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/colors.scss";

.o-dropdown__button {
  background: white;
  border-radius: 8px;
  border: 1px solid $border_grey;
  padding: 16px 26px 16px 16px;
  width: 100%;
  margin-bottom: 4px;
  position: relative;
  cursor: pointer;
}

.o-dropdown__button.isOpen {
  box-shadow: 0 0 0 4px rgba(248, 225, 245, 0.879);
  border: none;
}

::v-deep .o-dropdown__menu {
  border: 1px solid $border_grey;
  cursor: pointer;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);

  li {
    background-color: white;
    padding: 16px;

    &:hover {
      background-color: $hover_grey;
    }
  }
}

.baseIcon {
  position: absolute;
  right: 12px;
  transition: all 150ms ease-in-out;
}

.toggleUp {
  transform: rotate(180deg);
}
</style>
