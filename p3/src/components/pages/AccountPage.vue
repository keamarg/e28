<template>
  <div id="account-page">
    <div v-if="user">
      <h2>Hi, {{ user.name }}!</h2>

      <div id="favorites">
        <strong>Your Favorite Quizzes</strong>
        <p v-if="favorites && favorites.length == 0">No favorites yet.</p>
        <li v-for="(favorite, key) in uniqueFavorites" v-bind:key="key">
          <router-link to="/quiz">
            <button class="btn" v-on:click="$emit('update-quiz', favorite)">
              {{ favorite }} quiz
            </button></router-link
          >
        </li>
        <br />
      </div>

      <button v-on:click="logout">Logout</button>
    </div>

    <div v-else-if="loginForm" class="loginForm">
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
    <span v-if="loginForm && this.user == null">
      <button v-on:click="login" class="btn">Login</button>
      <ul v-if="errors">
        <li class="error" v-for="(error, index) in errors" :key="index">
          {{ error }}
        </li>
      </ul>
      <p>Or create new user</p>
      <button
        v-on:click="
          this.$store.state.loginForm = false;
          this.$store.state.registerForm = true;
        "
      >
        Create user
      </button>
    </span>
    <div
      v-if="this.registerForm && !this.user"
      id="registerForm"
      class="loginForm"
    >
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

      <button v-on:click="createUser" class="btn">Create user</button>
      <p>Or login with existing user</p>
      <button
        v-on:click="
          this.$store.state.loginForm = true;
          this.$store.state.registerForm = false;
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
      uniqueFavorites: [],
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    registerForm() {
      return this.$store.state.registerForm;
    },
    loginForm() {
      return this.$store.state.loginForm;
    },
    questions() {
      return this.$store.state.questions;
    },
    // uniqueFavorites() {
    //   if (this.favorites.includes()) console.log([...new Set(this.favorites)]);
    //   return [...new Map(this.favorites.map((x) => [key(x), x])).values()];
    // },
  },
  methods: {
    // checkFavorite(favorite) {
    //   console.log(this.favorites[0], this.favorites[1]);
    //   console.log(!this.favorites.includes(favorite.quiz));
    //   if (this.favorites.includes(favorite.quiz)) {
    //     return this.$store.getters.getQuestionById(favorite.quiz_id);
    //   }
    // },
    loadFavorites() {
      if (this.user) {
        axios
          .get("favoritequiz/query?user_id=" + this.user.id)
          .then((response) => {
            this.favorites = response.data.favoritequiz.map((favorite) => {
              let favoriteX = this.$store.getters.getQuestionById(
                favorite.quiz_id
              );
              if (typeof favoriteX != "undefined") {
                if (!this.uniqueFavorites.includes(favoriteX.quiz)) {
                  this.uniqueFavorites.push(favoriteX.quiz);
                }
              }
              return favoriteX;
            });
          });
      }
    },
    //   loadFavorites() {
    //   if (this.user) {
    //     axios
    //       .get("favoritequiz/query?user_id=" + this.user.id)
    //       .then((response) => {
    //         this.favorites = response.data.favoritequiz.map((favorite) => {
    //           return this.$store.getters.getQuestionById(favorite.quiz_id);
    //         });
    //       });
    //   }
    // },
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
      this.$store.state.loginForm = true;
      this.$store.state.registerForm = false;
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