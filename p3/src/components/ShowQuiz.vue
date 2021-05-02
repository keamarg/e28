<template>
  <div class="show-quiz">
    <div v-if="!removeCategory">
      <router-link to="/quiz">
        <button class="btn" v-on:click="$emit('update-quiz', category)">
          {{ category }} quiz
        </button></router-link
      ><br /><button
        v-if="user"
        class="deleteBtn"
        v-on:click="deleteQuiz(category)"
      >
        Delete {{ category }} quiz
      </button>
    </div>
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
    category: {
      type: String,
    },
    removeCategory: {
      type: Boolean,
    },
  },
  data() {
    return {
      errors: null,
    };
  },
  methods: {
    deleteQuiz(quiz) {
      let quizQuestion = "";
      this.$store.state.questions.forEach((value) => {
        if (value.quiz == quiz) {
          quizQuestion = value;
          axios.delete("/question/" + quizQuestion.id).then((response) => {
            if (response.data.errors) {
              this.errors = Object.values(response.data.errors)[0][0];
              this.showConfirmation = false;
            } else {
              this.$emit("update-questions", this.removeCategory);
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
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
.question {
  font-size: 2.5rem;
  margin: 5px 0 10px 0;
  vertical-align: baseline;
}

.thumb {
  max-height: 300px;
  border-radius: var(--radius);
}
</style>