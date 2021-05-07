<template>
  <div v-if="detailed" class="questionWrapper">
    <h4 class="redText">This is just a preview of the question.</h4>
    <br />
    <div class="question">
      {{ question.question }}
    </div>
    <ul
      class="question"
      v-for="(answer, index) in question.answers"
      v-bind:key="index"
    >
      <li>
        {{ question.answers[index][0] }}
      </li>
    </ul>
  </div>
  <div v-else class="show-question">
    <div class="question">
      {{ question.question }}
    </div>
    <div
      class="questions"
      v-bind:style="{ backgroundImage: 'url(' + imgSrc + ')' }"
    >
      <div
        class="question"
        v-for="(answer, index) in question.answers"
        v-bind:key="index"
      >
        <button v-if="!feedback" v-on:click="testAnswer(index)" class="btn">
          {{ question.answers[index][0] }}
        </button>
      </div>
    </div>
  </div>
  <router-link v-if="detailed" to="/">Back to home page</router-link>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
    },
    feedback: {
      type: Boolean,
    },
    quiz: {
      type: String,
    },
    detailed: {
      type: Boolean,
    },
  },
  emits: ["update-score"],
  data() {
    return {
      guessed: false,
    };
  },
  computed: {
    imgSrc() {
      try {
        return this.question.image;
      } catch (e) {
        return require("@/assets/images/image-not-available.png");
      }
    },
  },
  methods: {
    testAnswer(index) {
      if (!this.guessed) {
        this.$emit("update-score", this.question.answers[index]);
        this.guessed = true;
      }
      this.guessed = false;
    },
  },
};
</script>

<style scoped>
.question {
  font-size: 2rem;
  margin: 5px 0 10px 0;
  vertical-align: baseline;
}

.questionWrapper {
  width: 30rem;
  text-align: left;
  margin: 0 auto;
}
.questionWrapper li {
  font-size: 1.5rem;
  font-style: italic;
}
.redText {
  color: red;
}

.thumb {
  max-height: 300px;
  border-radius: var(--radius);
}
</style>