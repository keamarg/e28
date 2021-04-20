<template>
  <div id="show-featured">
    <h2>Categories</h2>
    <ul class="clean-list">
      <div v-for="(category, id) in categories" v-bind:key="id">
        <router-link to="/quiz"
          ><button v-bind:class="category" v-on:click="updateQuiz">
            {{ category }} quiz
          </button></router-link
        >
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
    },
    questions: {
      type: Array,
      default: null,
    },
  },
  methods: {
    updateQuiz() {
      console.log("pingping");
      this.$emit("update-quiz");
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

<style scoped>
#show-featured {
  background-color: var(--light-blue);
  border-radius: var(--radius);
  padding: 10px;
}
</style>