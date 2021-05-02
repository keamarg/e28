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
  },
  data() {
    return {};
  },
  computed: {
    question() {
      return this.$store.getters.getQuestionById(this.id);
    },
    questionNotFound() {
      return this.question == null;
    },
    questions() {
      return this.$store.state.questions;
    },
    category() {
      return this.$store.state.category;
    },
  },
};
</script>
  
<style>
</style>