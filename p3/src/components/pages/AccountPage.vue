<template>
  <div id="account-page">
    <div v-if="user">
      <h2>Hi, {{ user.name }}!</h2>

      <div id="favorites">
        <strong>Your Favorite Quizzes</strong>
        <p v-if="favorites && favorites.length == 0">No favorites yet.</p>
        <ul class="clean-list">
          <li v-for="(favorite, key) in favorites" v-bind:key="key">
            <router-link to="/quiz">
              <button
                class="btn favBtn"
                v-on:click="$emit('update-quiz', favorite)"
              >
                {{ favorite }} quiz
              </button></router-link
            >
          </li>
        </ul>
        <br />
      </div>

      <button v-on:click="logout">Logout</button>
    </div>

    <div v-else-if="loginForm" class="loginForm">
      <h2>Login</h2>

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
      <button v-on:click="login" class="btn">Login</button>
      <p v-if="errors" class="fail">{{ errors[0] }}</p>
      <p>Or create new user</p>
      <button v-on:click="changeForm('registerForm')">Create user</button>
    </span>
    <div v-if="registerForm && !this.user" id="registerForm" class="loginForm">
      <h2>Register</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            v-model="registrationData.name"
            v-on:input="validate"
          />
        </label>
      </div>
      <error-field
        v-if="errors && 'name' in errors"
        v-bind:errors="errors.name"
      ></error-field>
      <div>
        <label>
          Email:
          <input
            type="text"
            v-model="registrationData.email"
            v-on:input="validate"
          />
        </label>
      </div>
      <error-field
        v-if="errors && 'email' in errors"
        v-bind:errors="errors.email"
      ></error-field>
      <div>
        <label>
          Password:
          <input
            type="password"
            v-model="registrationData.password"
            v-on:input="validate"
          />
        </label>
      </div>
      <error-field
        v-if="errors && 'password' in errors"
        v-bind:errors="errors.password"
      ></error-field>

      <button v-on:click="createUser" class="btn">Create user</button>
      <p>Or login with existing user</p>
      <button v-on:click="changeForm('loginForm')">Login</button>
    </div>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";
import ErrorField from "@/components/ErrorField.vue";
import Validator from "validatorjs";

export default {
  components: { "error-field": ErrorField },
  data() {
    return {
      data: {
        email: localStorage.getItem("user"),
        password: "",
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
    registerForm() {
      return this.$store.state.registerForm;
    },
    loginForm() {
      return this.$store.state.loginForm;
    },
    questions() {
      return this.$store.state.questions;
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
  methods: {
    validate() {
      let validator = new Validator(this.registrationData, {
        name: "required|between:3,20",
        email: "required|email",
        password: "required|between:8,20",
      });

      if (validator.fails()) {
        this.errors = validator.errors.all();
      } else {
        this.errors = null;
      }

      return validator.passes();
    },

    //this method controls which form to show, and fills in the loginform with user data from localStorage
    changeForm(formType) {
      if (formType == "loginForm") {
        this.data.email = localStorage.getItem("user");
        this.$store.commit("setLoginForm", true);
        this.$store.commit("setRegisterForm", false);
      } else {
        this.$store.commit("setLoginForm", false);
        this.$store.commit("setRegisterForm", true);
      }
    },
    loadFavorites() {
      if (this.user) {
        axios
          .get("favoritequiz/query?user_id=" + this.user.id)
          .then((response) => {
            this.favorites = response.data.favoritequiz.map((favorite) => {
              return favorite.quiz_id;
            });
          });
      }
    },

    //the login method also sets localStorage with user data for the login field
    login() {
      axios.post("login", this.data).then((response) => {
        if (response.data.authenticated) {
          this.$store.commit("setUser", response.data.user);
        } else {
          this.errors = response.data.errors;
        }
        if (this.user) {
          localStorage.setItem("user", this.$store.state.user.email);
        }
      });
    },
    logout() {
      axios.post("logout").then((response) => {
        if (response.data.success) {
          this.$store.commit("setUser", false);
        }
        this.data.email = "";
        this.data.password = "";
      });
    },
    createUser() {
      if (this.validate()) {
        axios.post("register", this.registrationData).then((response) => {
          if (response.data.authenticated) {
            this.$store.commit("setUser", response.data.user);
          } else {
            this.errors = response.data.errors;
          }
        });
        this.data = this.registrationData;
        this.data.password = "";
        if (this.errors == null) {
          this.$store.state.loginForm = true;
          this.$store.state.registerForm = false;
        }
      }
    },
  },
};
</script>
<style>
.fail {
  color: red;
}
.favBtn {
  background-color: #ff851b;
  font-size: 1rem;
}
.favBtn:hover {
  background-color: #ff851b;
  box-shadow: 0px 0px 10px #48abd8;
}
</style>