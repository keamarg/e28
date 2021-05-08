<template>
  <div>
    <h1 data-test="access-denied-heading">Access Denied</h1>
    <p>
      <router-link to="/account">
        <span v-on:click="setForm"> Create an account </span> </router-link
      >or
      <router-link to="/account">
        <span v-on:click="setForm(false)"> login </span></router-link
      >
      to create your own quizzes
    </p>
  </div>
</template>

<script>
export default {
  //sets the state of the AccountPage to fit the desired form
  methods: {
    setForm(registerForm) {
      if (registerForm) {
        this.$store.commit("setLoginForm", false);
        this.$store.commit("setRegisterForm", true);
      } else {
        this.$store.commit("setLoginForm", true);
        this.$store.commit("setRegisterForm", false);
      }
    },
  },
};
</script>

