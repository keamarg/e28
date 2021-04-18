<template>
  <div class="show-question">
    <img class="thumb" v-bind:src="imgSrc" />
    <div class="question">{{ question.question }}</div>
    <div
      class="question"
      v-for="(answer, index) in question.answers"
      v-bind:key="index"
    >
      <button v-if="!feedback" v-on:click="testAnswer(index)">
        {{ index + 1 }}: {{ question.answers[index][0] }}
      </button>
    </div>
  </div>
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
  },
  data() {
    return {
      guessed: false,
    };
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
  computed: {
    imgSrc() {
      try {
        return this.question.image;
      } catch (e) {
        return require("@/assets/images/image-not-available.png");
      }
    },
  },
};
</script>

<style scoped>
.show-product {
  border: 1px solid var(--silver);
  text-align: center;
  padding: 15px;
  margin: 15px;
  width: 30%;
  min-width: 300px;
}

.question {
  font-size: 1rem;
  margin: 5px 0 10px 0;
  vertical-align: baseline;
}

.thumb {
  max-height: 300px;
  border-radius: var(--radius);
}
</style>