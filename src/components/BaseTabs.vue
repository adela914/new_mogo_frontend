<template>
  <div
    ref="tabsContaniner"
    class="m-tabs"
    tabindex="-1"
    @keydown.left.right.down.up.prevent="handleKey"
  >
    <div
      class="m-tabs__container"
      :class="{
        marginLeft: !modelValue,
        marginRight: modelValue === tabs.length - 1,
      }"
    >
      <div class="slider" :style="cssVars" />
      <ul class="m-tabs__head" role="tablist" aria-label="TabNavigation">
        <li
          v-for="(tab, index) in tabs"
          ref="tab"
          :key="tab"
          class="m-tabs__head--tab"
          :class="{ selected: modelValue === index }"
          role="tab"
          :aria-selected="modelValue === tab"
          :aria-controls="tab + 'name'"
          :tabindex="modelValue === index ? 0 : -1"
          @keydown.tab.prevent="handleTab"
          @click="tabClicked(index)"
        >
          <h4>{{ tab }}</h4>
        </li>
      </ul>
    </div>
    <div class="m-tabs__content">
      <div
        v-for="(tab, index) in tabs"
        v-show="modelValue === index"
        :id="tab + 'name'"
        ref="tabpanel"
        :key="tab"
        role="tabpanel"
        :aria-labelledby="tab"
        tabindex="0"
      >
        <slot :name="tab" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Key } from "@/models/uxui.models";

export default defineComponent({
  name: "BaseTabs",
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
    tabs: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  methods: {
    tabClicked(index: number) {
      this.$emit("update:modelValue", index);
    },
    /**
     * @method handleTab It focus/blur to the active tab on tab key-down.
     */
    handleTab() {
      const tabContainer = this.$refs.tabsContaniner as HTMLElement;
      tabContainer.focus();

      const tabElement = this.$refs.tab as Array<HTMLElement>;
      tabElement[this.modelValue].blur();
    },
    /**
     * @method handleKey Navigation can be accessible with arrow keys.
     */
    handleKey(e: KeyboardEvent) {
      const tabElement = this.$refs.tab as Array<HTMLElement>;

      if (e.key === Key.ArrowLeft && this.modelValue - 1 >= 0) {
        this.tabClicked(this.modelValue - 1);
      } else if (
        e.key === Key.ArrowRight &&
        this.modelValue + 1 < this.tabs.length
      ) {
        this.tabClicked(this.modelValue + 1);
      } else if (e.key === Key.ArrowDown) {
        const tabPanelElement = this.$refs.tabpanel as Array<HTMLElement>;
        tabPanelElement[this.modelValue].focus();
        return;
      }
      tabElement[this.modelValue].focus();
    },
  },
  computed: {
    /**
     * @method cssVars - [getter]: compute the slider style.
     * @return dynamic css variables for slider's transform and width.
     */
    cssVars(): { [key: string]: number } {
      return {
        "--tabs-count": Object.keys(this.tabs).length,
        "--tab-index": this.modelValue,
      };
    },
  },
});
</script>

<style lang="scss">
@import "~@/assets/scss/colors.scss";

.m-tabs {
  display: flex;
  flex-direction: column;
  max-width: 50%;
}

.m-tabs__container {
  margin-left: 3px;
  margin-right: 3px;
}

.m-tabs__head {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 53px;
}

.m-tabs__content {
  border: 1px solid $border_grey;
  box-shadow: 1px 3px 4px rgba(97, 93, 93, 0.1);
  padding: 24px;
}

.m-tabs__head--tab {
  flex: 1;
  border: 1px solid $border_grey;
  border-right: none;
  border-bottom: none;
  cursor: pointer;

  h4 {
    position: relative;
    top: 15px;
    padding-left: 24px;
    color: $border_grey;
    margin: 0;
  }

  &:last-child {
    border-right: 1px solid $border_grey;
  }
}

.selected {
  background-color: $white_0;
  border-right: none;
  z-index: 2;
  margin-bottom: -1px;
  border-top: none;
  box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.1);
  transition: all ease-out 0.2s 0.1s;

  h4 {
    font-size: 20px;
    line-height: 20px;
    color: $accent_0;
  }
}

.slider {
  position: relative;
  height: 4px;
  z-index: 3;
  background: $accent_0;
  width: calc(100% / var(--tabs-count));
  transform: translateX(calc(100% * var(--tab-index)));
  transition: all 0.33s cubic-bezier(0.38, 0.8, 0.32, 1.07);
}

.m-tabs__head--tab:not(.selected) {
  margin-top: 2px;
}

.marginLeft {
  margin-left: 0;
}

.marginRight {
  margin-right: 0;
}

*:focus {
  outline: none;
}
</style>
