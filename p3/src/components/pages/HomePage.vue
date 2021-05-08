<template>
  <div id="home-page">
    <h1>Pick a quiz</h1>
    <p>
      This is a platform for creating your own quizzes. <br />There is a premade
      quiz about wine, but
      <router-link data-test="nav-link-create" to="/create"
        >create
      </router-link>
      whatever you like!
    </p>
    <ul class="clean-list">
      <div v-for="(category, id) in categories" v-bind:key="id">
        <show-quiz
          v-on:update-quiz="updateQuiz"
          v-on:update-questions="updateQuestions"
          v-bind:removeCategory="removeCategory"
          v-bind:category="category"
        >
        </show-quiz>
      </div>
    </ul>
    <img alt="logo" src="https://source.unsplash.com/400x300/?quiz" />
  </div>
</template>

<script>
import ShowQuestion from "@/components/ShowQuiz.vue";

export default {
  components: { "show-quiz": ShowQuestion },

  data() {
    return {
      removeCategory: false,
    };
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
    questions() {
      return this.$store.state.questions;
    },
  },
  methods: {
    updateQuiz(category) {
      this.$emit("update-quiz", category);
    },
    updateQuestions(category) {
      this.removeCategory = false;
      this.$emit("update-questions", category);
    },
  },
};
</script>

<style>
</style>