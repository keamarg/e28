<template>
  <div>
    <h1>Access Denied</h1>
    <p>
      <router-link to="/account">
        <span
          v-on:click="
            this.$store.state.loginForm = false;
            this.$store.state.registerForm = true;
          "
        >
          Create an account
        </span> </router-link
      >or
      <router-link to="/account">
        <span
          v-on:click="
            this.$store.state.loginForm = true;
            this.$store.state.registerForm = false;
          "
        >
          login
        </span></router-link
      >
      to create your own quizzes
    </p>
  </div>
</template>