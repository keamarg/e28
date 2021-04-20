<template>
  <div class="show-question">
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