<template>
  <div id="create-page">
    <h1>Create your own quiz</h1>
    <h2>Add a question</h2>
    <div id="inputs">
      <label for="quiz">Question category</label>
      <input
        type="text"
        id="quiz"
        v-model="question.quiz"
        placeholder="Required 1-12 letters"
      />
      <label for="image">Image keyword</label>
      <input
        type="text"
        id="image"
        v-model="question.image"
        placeholder="Required 1-12 letters (keyword for unsplash image)"
      />
      <label for="question">Question</label>
      <input
        type="text"
        id="question"
        v-model="question.question"
        placeholder="Required 1-100 letters"
      />
      <label for="answer1">Answer 1</label>
      <input
        type="text"
        id="answer1"
        v-model="question.answer1"
        placeholder="Required 1-50 letters"
      />
      <label for="answer2">Answer 2</label>
      <input
        type="text"
        id="answer2"
        v-model="question.answer2"
        placeholder="Required 1-50 letters"
      />
      <label for="answer3">Answer 3</label>
      <input
        type="text"
        id="answer3"
        v-model="question.answer3"
        placeholder="Required 1-50 letters"
      />
      <label for="answer4">Answer 4</label>
      <input
        type="text"
        id="answer4"
        v-model="question.answer4"
        placeholder="Required 1-50 letters"
      />
      <label for="correct">Correct answer?</label>
      <input
        type="text"
        id="correct"
        v-model="question.correct"
        placeholder="Required number from 1-4"
      />
      <button class="btn" v-on:click="addQuestion">Add Question</button>
      <div id="addsucceed" v-if="showConfirmation">Your question was added</div>
      <div id="addfail" v-if="!showConfirmation">{{ errors }}</div>
      <button class="btn" v-on:click="addTestQuestion">
        Add Test Question
      </button>
    </div>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  data() {
    return {
      showConfirmation: false,
      errors: null,
      question: {
        quiz: "",
        image: "",
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correct: "",
      },
      testQuestion: {
        quiz: "toys",
        image: "sled",
        question: "What was the name of Citizen Kane's beloved sled",
        answer1: "Rosebud",
        answer2: "Mayflower",
        answer3: "Dandelion",
        answer4: "Lightning",
        correct: 1,
      },
    };
  },
  methods: {
    addQuestion() {
      this.question.image =
        "https://source.unsplash.com/400x300/?" + this.question.image;
      axios.post("/question", this.question).then((response) => {
        if (response.data.errors) {
          this.errors = Object.values(response.data.errors)[0][0];
          this.showConfirmation = false;
        } else {
          this.$emit("update-questions");
          for (const [key] of Object.entries(this.question)) {
            this.question[key] = "";
          }
          this.showConfirmation = true;
        }
      });
    },

    addTestQuestion() {
      this.question.quiz = this.testQuestion.quiz;
      this.question.image = this.testQuestion.image;
      this.question.question = this.testQuestion.question;
      this.question.answer1 = this.testQuestion.answer1;
      this.question.answer2 = this.testQuestion.answer2;
      this.question.answer3 = this.testQuestion.answer3;
      this.question.answer4 = this.testQuestion.answer4;
      this.question.correct = this.testQuestion.correct;
    },
  },
};
</script>

<style scoped>
#inputs {
  text-align: left;
}
#addsucceed {
  color: green;
}
#addfail {
  color: red;
}
</style>