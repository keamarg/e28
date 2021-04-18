<template>
  <div id="quiz-page">
    <p>"Quiz page"</p>
  </div>

  <show-question
    v-if="question"
    v-on:update-score="updateScore"
    v-bind:question="question"
    v-bind:feedback="feedback"
  ></show-question>
  <p v-else>Game over</p>
  <div v-if="feedback">
    <p v-if="correct">
      Correct, <i>"{{ this.answer }}"</i> is {{ this.correct }} well done!
    </p>
    <p v-else>
      Sorry, <i>"{{ this.answer }}"</i> is {{ this.correct }}.
    </p>
    <button v-on:click="nextQuestion">Next question</button>
  </div>
  <p>Score:{{ this.score }}</p>
</template>

<script>
import ShowQuestion from "@/components/ShowQuestion.vue";
export default {
  components: { "show-question": ShowQuestion },
  props: {
    questions: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      correct: null,
      answer: "",
      score: "0",
      round: "0",
      feedback: false,
    };
  },
  computed: {
    question() {
      if (this.round == this.questions.length) {
        return;
      } else {
        return this.questions[this.round]; //this.questions[Math.floor(Math.random() * this.questions.length)];
      }
    },
  },
  methods: {
    updateScore(answer) {
      this.feedback = true;
      this.answer = answer[0];
      if (answer[1]) {
        this.correct = true; //"Correct, well done!";
        this.score++;
      } else this.correct = false; //"Sorry, that is not correct.";
    },
    nextQuestion() {
      this.feedback = false;
      this.round++;
    },
  },
};
</script>

<style>
</style>