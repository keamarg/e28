<template>
  <div id="account-page">
    <div v-if="user">
      <h2>Hi, {{ user.name }}!</h2>

      <div id="favorites">
        <strong>Your Favorites</strong>
        <p v-if="favorites && favorites.length == 0">No favorites yet.</p>
        <li v-for="(favorite, key) in favorites" v-bind:key="key">
          {{ favorite.name }}
        </li>
      </div>

      <button v-on:click="logout">Logout</button>
    </div>

    <div v-else-if="loginForm" id="loginForm">
      <h2>Login</h2>
      <small>
        (Form is prefilled for demonstration purposes; remove in final
        application)
      </small>
      <div>
        <label>
          Email:
          <input type="text" v-model="data.email" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" v-model="data.password" />
        </label>
      </div>
    </div>
    <span v-if="loginForm && this.user == false">
      <button v-on:click="login">Login</button>
      <ul v-if="errors">
        <li class="error" v-for="(error, index) in errors" :key="index">
          {{ error }}
        </li>
      </ul>
      <p>Or create new user</p>
      <button
        v-on:click="
          registerForm = true;
          loginForm = false;
        "
      >
        Create user
      </button>
    </span>
    <div v-if="registerForm && !this.user" id="registerForm">
      <h2>Register</h2>
      <div>
        <label>
          Name:
          <input type="text" v-model="registrationData.name" />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="text" v-model="registrationData.email" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" v-model="registrationData.password" />
        </label>
      </div>

      <button v-on:click="createUser">Create user</button>
      <p>Or login with existing user</p>
      <button
        v-on:click="
          loginForm = true;
          registerForm = false;
        "
      >
        Login
      </button>

      <ul v-if="errors">
        <li class="error" v-for="(error, index) in errors" :key="index">
          {{ error }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  data() {
    return {
      // Form is prefilled for demonstration purposes; remove in final application
      // jill@harvard.edu/asdfasdf is one of our seed users from e28api/seeds/user.json
      registerForm: true,
      loginForm: false,
      data: {
        email: "jill@harvard.edu",
        password: "asdfasdf",
      },
      registrationData: {
        name: "",
        email: "",
        password: "",
      },
      errors: null,
      favorites: [],
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    loadFavorites() {
      if (this.user) {
        axios.get("favorite/query?user_id=" + this.user.id).then((response) => {
          this.favorites = response.data.favorite.map((favorite) => {
            return this.$store.getters.getProductById(favorite.product_id);
          });
        });
      }
    },
    login() {
      axios.post("login", this.data).then((response) => {
        if (response.data.authenticated) {
          this.$store.commit("setUser", response.data.user);
        } else {
          this.errors = response.data.errors;
        }
      });
    },
    logout() {
      axios.post("logout").then((response) => {
        if (response.data.success) {
          this.$store.commit("setUser", null);
        }
      });
    },
    createUser() {
      axios.post("register", this.registrationData).then((response) => {
        if (response.data.authenticated) {
          this.$store.commit("setUser", response.data.user);
        } else {
          this.errors = response.data.errors;
        }
      });
      this.data = this.registrationData;
      this.loginForm = true;
      this.registerForm = false;
    },
  },
  watch: {
    user() {
      this.loadFavorites();
    },
  },
  mounted() {
    this.loadFavorites();
  },
};
</script>