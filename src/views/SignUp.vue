<template>
  <p>Here is sign up page</p>
  <BaseInput v-model="userEmail" placeholder="Email" />
  <BaseInput v-model="userPassword" placeholder="Password" type="password" />
  <BaseInput
    v-model="userPasswordRepeat"
    placeholder="Password"
    type="password"
  />
  <BaseButton name="Cancel" class="signup__cancelBtn" />
  <BaseButton name="Sign Up" />
</template>

<script>
import { defineComponent } from "vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";

export default defineComponent({
  name: "SignUp",
  components: {
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      userEmail: "",
      userPassword: "",
      userPasswordRepeat: "",
    };
  },
});
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/colors.scss";

.signup__cancelBtn {
  background-color: $white_0;
}
</style>
