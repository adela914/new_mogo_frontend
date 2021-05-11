<template>
  <div>
    <p>Components Libraries. Still working in progress...</p>
    <BaseButton name="my button" />
    <BaseInput v-model="inputValue" type="search" />
    <p>{{ inputValue }}</p>

    <BaseDropdown dropdownId="'testDropdown'">
      <template v-slot:button>{{ dropdownValue }} </template>
      <template v-slot:content>
        <ul>
          <li
            v-for="(item, index) in dropdownItems"
            :key="index"
            @click="itemSelected(item)"
          >
            {{ item }}
          </li>
        </ul>
      </template>
    </BaseDropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseDropdown from "@/components/BaseDropdown.vue";

export default defineComponent({
  name: "Home",
  components: {
    BaseButton,
    BaseInput,
    BaseDropdown,
  },
  data() {
    return {
      tabIndex: 0,
      inputValue: "",
      dropdownItems: ["item1", "item2"],
      dropdownValue: "item1",
    };
  },
  methods: {
    itemSelected(item: string) {
      this.dropdownValue = item;
    },
  },
});
</script>
<style lang="scss" scoped>
@import "~@/assets/scss/colors.scss";

main {
  background-color: $white_0;
}

.o-dropdown {
  max-width: 250px;
}
</style>
