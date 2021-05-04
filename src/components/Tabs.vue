<template>
  <div ref="tabsContaniner" class="m-tabs" tabindex="-1">
    <div class="m-tabs__container">
      <div class="m-tabs__title">title</div>
      <div class="flex-spacer" />
      <div class="m-tabs__components">
        <div class="slider" :style="cssVars" />
        <ul class="m-tabs__head" role="tablist" aria-label="TabNavigation">
          <li
            v-for="(disabled, name, index) in tabs"
            ref="tab"
            :key="name"
            class="m-tabs__head--tab"
            :class="{ selected: modelValue === index, disabled: disabled }"
            role="tab"
            :aria-selected="modelValue === index"
            :aria-controls="name + 'name'"
            :tabindex="modelValue === index ? 0 : -1"
            @click="tabClicked(index, name)"
          >
            <h4>
              {{ "name" }}
            </h4>
          </li>
        </ul>
      </div>
    </div>
    <div class="m-tabs__content">
      <div
        v-for="(disabled, name, index) in tabs"
        :id="name + 'name'"
        ref="tabpanel"
        :key="name"
        role="tabpanel"
        :aria-labelledby="name"
        tabindex="0"
      >
        <slot v-if="modelValue === index" :name="name" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "Tabs",
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
    tabs: {
      type: Object as PropType<{ [tabName: string]: boolean }>,
      required: true,
    },
    title: {
      type: String,
    },
  },
  methods: {
    tabClicked(index: number) {
      this.$emit("update:modelValue", index);
    },
  },
  computed: {
    cssVars(): { [key: string]: number } {
      return {
        "--tabs-count": Object.keys(this.tabs).length,
        "--tab-index": this.modelValue,
      };
    },
  },
});
</script>

<style lang="scss" scoped>
div {
  margin: 0;
  padding: 0;
}

.m-tabs {
  display: flex;
  flex-direction: column;
  background: white;
}

.m-tabs__head {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 53px;
  margin: 0;
  padding: 0;
}

.m-tabs__content {
  border: 1px solid grey;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.1);
  padding: 24px;
}

.m-tabs__head--tab {
  flex: 1;
  border: 1px solid grey;
  border-right: none;
  border-bottom: none;
  cursor: pointer;

  h4 {
    position: relative;
    top: 15px;
    padding-left: 24px;
    color: grey;
  }

  &:last-child {
    border-right: 1px solid grey;
  }
}

.selected {
  background-color: white;
  border-right: none;
  z-index: 2;
  margin-bottom: -1px;
  border-top: none;
  box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.1);
  transition: all ease-out 0.2s 0.1s;

  h4 {
    font-size: 20px;
    line-height: 20px;
    color: pink;
  }
}

.slider {
  position: relative;
  height: 4px;
  z-index: 3;
  background: green;
  width: calc(100% / var(--tabs-count));
  transform: translateX(calc(100% * var(--tab-index)));
  transition: all 0.33s cubic-bezier(0.38, 0.8, 0.32, 1.07);
}

.m-tabs__head--tab:not(.selected) {
  margin-top: 2px;
}

.disabled {
  pointer-events: none;
  cursor: not-allowed;

  h4 {
    color: grey;
  }
}

.flex-spacer {
  flex: 100% 1 1;
}

.m-tabs__container {
  display: flex;
  justify-content: space-between;
}
</style>
