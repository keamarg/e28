<template>
  <div v-if="guess != null">
    <div v-if="correct" v-bind:class="{ trueGreen: correct }">
      You got it! Nice work.
      <button v-on:click="$emit('start-game')">Play again</button>
    </div>
    <div v-else v-bind:class="{ falseRed: !correct }">
      Sorry, that's not correct. Please try again.
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedbackText",
  props: {
    correct: { type: Boolean },
    guess: { type: String },
  },
  data() {
    return {};
  },
};
</script>

<style>
.hint {
  font-style: italic;
}

.mysteryWord {
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  font-size: x-large;
}

[v-cloak] {
  display: none;
}

.falseRed {
  color: white;
  display: inline-block;
  margin-top: 20px;
  background-color: red;
  padding: 5px;
}

.trueGreen {
  color: white;
  display: inline-block;
  margin-top: 20px;
  background-color: green;
  padding: 5px;
}
</style>