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
import { axios } from "@/common/app.js";
// import { questions } from "@/common/questions.js";

export default {
  name: "App",
  data() {
    return {
      quiz: "",
      questions: [],
      images: [],
      links: ["home", "quiz", "create"],
      paths: {
        home: "/",
        quiz: "/quiz",
        create: "/create",
      },
    };
  },
  mounted() {
    this.loadQuestions();
  },
  methods: {
    updateQuiz(category) {
      this.quiz = category;
    },
    loadQuestions() {
      axios.get("question").then((response) => {
        this.questions = response.data.question;
        this.remodelData();
      });
    },
    remodelData() {
      console.log("remodelling data");
      this.questions.forEach(function (value) {
        value.answers = [
          [value.answer1],
          [value.answer2],
          [value.answer3],
          [value.answer4],
        ];
        value.answers.forEach(function (val, i) {
          if (i + 1 == value.correct) {
            value.answers[i][1] = "true";
          }
        });
        delete value.answer1;
        delete value.answer2;
        delete value.answer3;
        delete value.answer4;
        delete value.correct;
      });
    },
  },
};
</script>

<style src='@/assets/css/style.css'></style>