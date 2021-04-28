<template>
  <div id="question-page">
    <div v-if="questionNotFound">
      <p>Question {{ id }} not found.</p>
      <router-link to="/">Back to home page</router-link>
    </div>
    <div v-else-if="question">
      <show-question
        v-bind:question="question"
        v-bind:detailed="true"
      ></show-question>
    </div>
  </div>
</template>

<script>
import ShowQuestion from "@/components/ShowQuestion.vue";

export default {
  components: { "show-question": ShowQuestion },
  props: {
    id: {
      type: String,
    },
    questions: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {};
  },
  computed: {
    question() {
      return this.questions.filter((question) => {
        return question.id == this.id;
      }, this.id)[0];
    },
    questionNotFound() {
      return this.question == null;
    },
  },
};
</script>
  
<style>
</style>