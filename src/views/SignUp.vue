<template>
  <div class="signup__container">
    <h1>Sign in to Mogo</h1>
    <BaseInput v-model="userEmail" placeholder="Email" />
    <BaseInput v-model="userPassword" placeholder="Password" type="password" />
    <BaseInput
      v-model="userPasswordRepeat"
      placeholder="Password"
      type="password"
    />
    <div class="button__container">
      <BaseButton name="Cancel" class="signup__cancelBtn" />
      <BaseButton name="Sign Up" />
    </div>
  </div>
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

<style lang="scss">
@import "~@/assets/scss/colors.scss";

.signup__container {
  border: 1px;
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  h1 {
    text-align: center;
  }
  .o-baseInput {
    padding-bottom: 24px;
    display: inline;

    .o-baseInput__field {
      width: 100%;
    }
  }

  .button__container {
    display: flex;
    justify-content: space-around;
  }

  .baseButton {
    width: 200px;
  }

  .signup__cancelBtn {
    background-color: $white_0;
  }
}
</style>
