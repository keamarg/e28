<template>
  <div id="home-page">
    <h1>Pick a quiz</h1>
    <p>
      This is a platform for creating your own quizzes. <br />There is a premade
      quiz about wine, but create whatever you like!
    </p>
    <ul class="clean-list">
      <div v-for="(category, id) in categories" v-bind:key="id">
        <router-link to="/quiz"
          ><button
            class="btn"
            v-bind:class="category"
            v-on:click="$emit('update-quiz', category)"
          >
            {{ category }} quiz
          </button></router-link
        ><br /><button
          v-bind:class="category"
          class="deleteBtn"
          v-on:click="deleteQuiz(category)"
        >
          Delete {{ category }} quiz
        </button>
      </div>
    </ul>
    <img alt="logo" src="https://source.unsplash.com/400x300/?quiz" />
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  props: {
    questions: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      errors: null,
      removeCategory: " ",
    };
  },
  methods: {
    deleteQuiz(quiz) {
      let quizQuestion = "";
      this.questions.forEach((value) => {
        if (value.quiz == quiz) {
          quizQuestion = value;
          axios.delete("/question/" + quizQuestion.id).then((response) => {
            if (response.data.errors) {
              this.errors = Object.values(response.data.errors)[0][0];
              this.showConfirmation = false;
            } else {
              this.$emit("update-products");
              this.removeCategory = quizQuestion.quiz;
              console.log(this.removeCategory);
            }
          });
        }
      });
    },
  },
  computed: {
    categories() {
      let categories = this.questions.map((question) =>
        question.quiz.split(",")
      );
      let mergedCategories = [].concat.apply([], categories);

      // Return unique, sorted categories
      return [...new Set(mergedCategories)].sort();
    },
  },
};
</script>

<style>
</style>