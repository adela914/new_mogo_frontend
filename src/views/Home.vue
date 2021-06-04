<template>
  <div>
    <h1>Components Libraries. Still working in progress...</h1>
    <BaseButton name="my button" />
    <BaseInput v-model="inputValue" type="search" ref="closeButton" />
    <p>{{ inputValue }}</p>
    <BaseButton @click="showModal = true" name="Show Modal" />

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
    <BaseModal
      v-if="showModal"
      @close="showModal = false"
      :label="'test-modal'"
    >
      <template #header>
        <h3>custom header</h3>
      </template>
    </BaseModal>
    <BaseTabs :tabs="['day', 'month', 'year']" v-model="tabIndex" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseDropdown from "@/components/BaseDropdown.vue";
import BaseModal from "@/components/BaseModal.vue";
import BaseTabs from "@/components/BaseTabs.vue";

export default defineComponent({
  name: "Home",
  components: {
    BaseButton,
    BaseInput,
    BaseDropdown,
    BaseModal,
    BaseTabs,
  },
  data() {
    return {
      tabIndex: 0,
      inputValue: "",
      dropdownItems: [],
      dropdownValue: "",
      showModal: false,
    };
  },
  methods: {
    itemSelected(item: string) {
      this.dropdownValue = item;
    },
  },
  async created() {
    const res = await fetch(
      "https://jscc19-mogo-backend.herokuapp.com/restaurants"
    );

    const json = await res.json();
    const names = json.map(({ name }: { name: string }) => name);

    this.dropdownValue = names[0];
    this.dropdownItems = names;
  },
});
</script>
<style lang="scss" scoped>
@import "~@/assets/scss/colors.scss";

main {
  background-color: $white_0;
}

.o-dropdown {
  max-width: 300px;
}
</style>
