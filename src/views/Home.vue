<template>
  <div>
    <h1>Components Libraries. Still working in progress...</h1>
    <BaseButton name="my button" />
    <BaseInput v-model="inputValue" type="search" />
    <p>{{ inputValue }}</p>
    <BaseDropdown dropdownId="'testDropdown'">
      <template v-slot:button>{{ dropdownValue }} </template>
      <template v-slot:content>
        <ul listbox>
          <li
            role="option"
            v-for="(item, index) in dropdownItems"
            :key="index"
            @click="itemSelected(item)"
          >
            <a href="#"> {{ item }}</a>
          </li>
        </ul>
      </template>
    </BaseDropdown>
    <BaseButton @click="showModal = true"> Show Modal</BaseButton>
    <BaseModal
      v-if="showModal"
      @close="showModal = false"
      :label="'test-modal'"
    >
      <template #header>
        <h3>custom header</h3>
      </template>
    </BaseModal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseDropdown from "@/components/BaseDropdown.vue";
import BaseModal from "@/components/BaseModal.vue";

export default defineComponent({
  name: "Home",
  components: {
    BaseButton,
    BaseInput,
    BaseDropdown,
    BaseModal,
  },
  data() {
    return {
      tabIndex: 0,
      inputValue: "",
      dropdownItems: ["item1", "item2"],
      dropdownValue: "item1",
      showModal: false,
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
