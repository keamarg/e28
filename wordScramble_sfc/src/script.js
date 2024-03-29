import { createApp } from 'vue'
import FeedbackText from './components/FeedbackText.vue'

const WordScramble = {
    data() {
        return {
            playerName: "",
            ready: false,
            mysteryWord: [],
            previousWord: [],
            words: [
                ['apple', 'Sometimes red, sometimes delicious'],
                ['washington', 'Rushmore’s left edge'],
                ['pumpkin', 'Halloween’s favorite fruit'],
                ['football', 'Play with your hands or feet, depending on your location']
            ],
            guess: null,
            correct: false,
            level: "",
        }
    },
    computed: {
        scrambledWord() {
            return this.scramble(this.mysteryWord[0]);
        },
    },
    methods: {
        startGame() {
            if (this.correct) {
                this.guess = null;
            } else {
                this.ready = !this.ready;
            }
            this.randomMysteryWord(this.level);
        },
        randomMysteryWord(level) {
            //Default: Easy
            this.previousWord = this.mysteryWord;
            do {
                this.mysteryWord = this.words[(Math.floor(Math.random() * this.words.length))];
            } while (this.mysteryWord[0] == this.previousWord[0]);

            if (level == 'medium') {
                let hint = this.mysteryWord[1].split(' ')
                this.mysteryWord[1] = hint[0] + " " + hint[1] + " " + "[...]";
            } else if (level == 'hard') {
                this.mysteryWord[1] = "Sorry, no help on hard level!";

            }


        },
        scramble(str) {
            //Scramble code borrowed from https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
            return str.split('').sort(function () { return 0.5 - Math.random() }).join('');
        },
        submitGuess() {
            if (this.guess == this.mysteryWord[0]) {
                this.correct = true;
            } else {
                this.correct = false;
            }
            this.guess = "";
        },
    }
}

const app = createApp(WordScramble)
app.component("feedback-text", FeedbackText);
app.mount('#app');