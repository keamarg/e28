<template>
  <div id="questions-page">
    <h2>Questions</h2>
    <button v-on:click="deleteAllProducts">Delete all questions</button>

    <div id="questions">
      <router-link
        v-for="question in questions"
        v-bind:key="question.id"
        v-bind:to="'/questions/' + question.id"
      >
        <show-question
          v-bind:question="question"
          v-bind:detailed="false"
        ></show-question>
      </router-link>
    </div>
  </div>
</template>

<script>
import ShowQuestion from "@/components/ShowQuestion.vue";
import { axios } from "@/common/app.js";

export default {
  components: { "show-question": ShowQuestion },
  props: {
    questions: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {};
  },
  methods: {
    deleteAllProducts() {
      this.questions.forEach(this.deleteQuestion);
    },
    deleteQuestion(item, index) {
      axios.delete("/question/" + index).then((response) => {
        if (response.data.errors) {
          console.log("nope");
          this.errors = Object.values(response.data.errors)[0][0];
          this.showConfirmation = false;
        } else {
          this.$emit("update-questions");
          this.showConfirmation = true;
        }
      });
    },
  },
};
</script>

<style scoped>
#products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}
a {
  text-decoration: none;
  max-width: 362px;
}
</style>