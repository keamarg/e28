<template>
  <div id="quiz-page">
    <h1>{{ quiz }} quiz</h1>
    <div v-if="user && question">
      <button
        v-if="isFavorite"
        class="btn favBtn"
        v-on:click="removeFromFavorites()"
      >
        ✘ Remove from favorites
      </button>
      <button v-else class="btn favBtn" v-on:click="addToFavorites()">
        ✔ Add to favorites
      </button>
    </div>
    <show-question
      v-if="question"
      v-on:update-score="updateScore"
      v-bind:question="question"
      v-bind:feedback="feedback"
    ></show-question>
    <div id="questions" v-else-if="quiz == ''">
      <h3>Pick a quiz on the <router-link to="/">home</router-link> tab.</h3>
      The latest added questions are:
      <ul>
        <li v-for="question in questions" v-bind:key="question.id">
          <span v-if="question.id > questions.length - 3">
            <div id="category">Category - {{ question.quiz }}</div>
            <span>{{ question.question }}</span></span
          >
        </li>
      </ul>
    </div>
    <div v-else>
      <h2 class="incorrect">Game over</h2>
      <img alt="logo" src="https://source.unsplash.com/400x300/?quiz" /><br />
      <div>
        <button
          v-if="isFavorite"
          class="btn favBtn"
          v-on:click="removeFromFavorites()"
        >
          ✘ Remove from favorites
        </button>
        <button v-else class="btn favBtn" v-on:click="addToFavorites()">
          ✔ Add to favorites
        </button>
      </div>
      <br />
      <router-link to="/">Back to selection page</router-link>
    </div>
    <p class="feedback" v-if="!quiz == ''">Score:{{ this.score }}</p>
    <div v-if="feedback" class="feedback">
      <p v-if="correct" v-bind:class="{ correct }">
        Correct, <i>"{{ this.answer }}"</i> is {{ this.correct }} well done!
      </p>
      <p v-else class="{ incorrect }">
        Sorry, <i>"{{ this.answer }}"</i> is {{ this.correct }}.
      </p>
      <button class="btn" v-on:click="nextQuestion">Next question</button>
    </div>
  </div>
</template>

<script>
import ShowQuestion from "@/components/ShowQuestion.vue";
import favorite from "@/features/favorite.js";

export default {
  components: { "show-question": ShowQuestion },
  props: {
    questions: {
      type: Array,
      default: null,
    },
    quiz: {
      type: String,
    },
  },
  setup(props) {
    const { isFavorite, addToFavorites, removeFromFavorites } = favorite(
      props.quiz
    );
    return { isFavorite, addToFavorites, removeFromFavorites };
  },
  data() {
    return {
      specificQuestions: [],
      correct: null,
      answer: "",
      score: "0",
      round: "0",
      feedback: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    question() {
      if (this.round == this.specificQuestions.length) {
        return;
      } else {
        return this.specificQuestions[this.round];
      }
    },
  },
  mounted() {
    this.createQuestions(this.quiz);
  },
  methods: {
    createQuestions(quiz) {
      let specificQuestions = [];
      this.questions.forEach(function (value) {
        if (value.quiz == quiz) {
          specificQuestions.push(value);
        }
      });
      this.specificQuestions = specificQuestions;
    },
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

<style scope>
.feedback {
  font-size: 2rem;
  margin: 5px 0 10px 0;
  vertical-align: baseline;
}

li {
  list-style-type: none;
  margin-top: 1rem;
}
ul {
  padding-left: 0rem;
}
#questions {
  max-width: 50rem;
  margin: 0 auto;
  padding: 2rem;
  line-height: 2.5 rem;
  text-align: left;
}
#category {
  font-size: 2rem;
  font-weight: bold;
}
.favBtn {
  background-color: #ff851b;
  font-size: 1rem;
}
.favBtn:hover {
  background-color: #ff851b;
  box-shadow: 0px 0px 10px #48abd8;
}
</style>