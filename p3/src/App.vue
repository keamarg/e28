<template>
  <div>
    <img id="logo" alt="logo" src="@/assets/images/logo.png" />
    <nav>
      <ul>
        <li>
          <router-link
            v-for="link in links"
            v-bind:key="link"
            v-bind:to="paths[link]"
            >{{ link }}</router-link
          >
        </li>
      </ul>
    </nav>
    <router-view
      v-bind:questions="questions"
      v-bind:quiz="quiz"
      v-on:update-quiz="updateQuiz"
      v-on:update-questions="loadQuestions"
    ></router-view>
  </div>
</template>

<script>
// import { axios } from "@/common/app.js";
// import { questions } from "@/common/questions.js";

export default {
  name: "App",
  data() {
    return {
      quiz: "",
      // questions: [],
      images: [],
      links: ["home", "quiz", "create", "account"],
      paths: {
        home: "/",
        quiz: "/quiz",
        create: "/create",
        account: "/account",
      },
    };
  },
  computed: {
    questions() {
      return this.$store.state.questions;
    },
  },
  mounted() {
    this.loadQuestions();
    this.$store.dispatch("authUser");
  },
  methods: {
    updateQuiz(category) {
      this.quiz = category;
    },
    loadQuestions() {
      this.$store.dispatch("fetchQuestions");
    },
  },
};
</script>

<style src='@/assets/css/style.css'></style>