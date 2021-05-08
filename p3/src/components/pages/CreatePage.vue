<template>
  <div id="create-page">
    <h1>Create your own quiz</h1>
    <h2>Add a question</h2>
    <div id="inputs">
      <label for="quiz">Question category</label>
      <input
        data-test="quiz-quiz-input"
        type="text"
        id="quiz"
        v-model="question.quiz"
        placeholder="Required 1-12 letters"
        v-on:input="validate"
      />
      <error-field
        v-if="errors && 'quiz' in errors"
        v-bind:errors="errors.quiz"
      ></error-field>
      <label for="image">Image keyword</label>
      <input
        data-test="quiz-image-input"
        type="text"
        id="image"
        v-model="question.image"
        placeholder="Required 1-12 letters (keyword for unsplash image)"
        v-on:blur="validate"
      />
      <error-field
        v-if="errors && 'image' in errors"
        v-bind:errors="errors.image"
      >
      </error-field>

      <label for="question">Question</label>
      <input
        data-test="quiz-question-input"
        type="text"
        id="question"
        v-model="question.question"
        placeholder="Required 1-100 letters"
        v-on:blur="validate"
      />
      <error-field
        v-if="errors && 'question' in errors"
        v-bind:errors="errors.question"
      ></error-field>
      <label for="answer1">Answer 1</label>
      <input
        data-test="quiz-answer1-input"
        type="text"
        id="answer1"
        v-model="question.answer1"
        placeholder="Required 1-50 letters"
        v-on:blur="validate"
      />
      <error-field
        v-if="errors && 'answer1' in errors"
        v-bind:errors="errors.answer1"
      ></error-field>
      <label for="answer2">Answer 2</label>
      <input
        data-test="quiz-answer2-input"
        type="text"
        id="answer2"
        v-model="question.answer2"
        placeholder="Required 1-50 letters"
        v-on:blur="validate"
      />
      <error-field
        v-if="errors && 'answer2' in errors"
        v-bind:errors="errors.answer2"
      ></error-field>
      <label for="answer3">Answer 3</label>
      <input
        data-test="quiz-answer3-input"
        type="text"
        id="answer3"
        v-model="question.answer3"
        placeholder="Required 1-50 letters"
        v-on:blur="validate"
      />
      <error-field
        v-if="errors && 'answer3' in errors"
        v-bind:errors="errors.answer3"
      ></error-field>
      <label for="answer4">Answer 4</label>
      <input
        data-test="quiz-answer4-input"
        type="text"
        id="answer4"
        v-model="question.answer4"
        placeholder="Required 1-50 letters"
        v-on:blur="validate"
      />
      <error-field
        v-if="errors && 'answer4' in errors"
        v-bind:errors="errors.answer4"
      ></error-field>
      <label for="correct">Correct answer?</label>
      <input
        data-test="quiz-correct-input"
        type="text"
        id="correct"
        v-model="question.correct"
        placeholder="Required number from 1-4"
        v-on:blur="validate"
      />
      <error-field
        v-if="errors && 'correct' in errors"
        v-bind:errors="errors.correct"
      ></error-field>
      <button
        data-test="add-question-button"
        class="btn"
        v-on:click="addQuestion"
      >
        Add Question
      </button>
      <transition name="fade">
        <div
          id="addsucceed"
          v-if="showConfirmation"
          data-test="question-added-confirmation"
        >
          Your question was added
        </div>
      </transition>
      <br />
      <div id="addfail" v-if="errors">Correct the errors</div>
      <button class="btn" v-on:click="addTestQuestion">
        Fill with dummy data
      </button>
    </div>
  </div>
</template>

<script>
import ErrorField from "@/components/ErrorField.vue";
import { axios } from "@/common/app.js";
import Validator from "validatorjs";

export default {
  components: { "error-field": ErrorField },
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
    validate() {
      let validator = new Validator(this.question, {
        quiz: "required|between:1,12",
        image: "required|between:1,12",
        question: "required|between:1,100",
        answer1: "required|between:1,50",
        answer2: "required|between:1,50",
        answer3: "required|between:1,50",
        answer4: "required|between:1,50",
        correct: "required|integer|between:1,4",
      });

      if (validator.fails()) {
        this.errors = validator.errors.all();
      } else {
        this.errors = null;
      }

      return validator.passes();
    },
    addQuestion() {
      if (this.validate()) {
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
            setTimeout(() => (this.showConfirmation = false), 3000);
          }
        });
      }
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