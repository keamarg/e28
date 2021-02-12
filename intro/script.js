// Define the options of our application
const Game = {
    data() {
        return {
            playerName: "",
            mysteryNumber: Math.ceil(Math.random() * 10),
            guess: null,
            guesses: [],
            correct: false,
            ready: false,
            firstGame: true,
        }
    },
    methods: {
        addGuess() {
            this.guesses.push(this.guess);
            this.correct = this.guess == this.mysteryNumber;
        },
        startGame() {
            this.ready = !this.ready;
        },
        newGame() {
            this.guesses = [];
            this.mysteryNumber = Math.ceil(Math.random() * 10);
            this.correct = false;
            this.guess = null;
            this.firstGame = false;
        }
    }
}

// Create a new Vue instance using our options
const app = Vue.createApp(Game).mount('#app');