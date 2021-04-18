<template>
  <div id="home-page">
    <p>
      "Quizcreator" is a platform for creating your own quizzes. There is a
      premade quiz about wine, but create whatever you like!
    </p>
    <show-featured v-bind:questions="questions"></show-featured>
  </div>
</template>

<script>
// import { axios } from "@/common/app.js";
import ShowFeatured from "@/components/ShowFeatured.vue";

export default {
  components: {
    "show-featured": ShowFeatured,
  },
  props: {
    questions: {
      type: Array,
      default: null,
    },
  },
  methods: {
    // updateQuiz() {
    //   this.$emit("update-quiz");
    // },
  },
};
</script>

<style>
</style>