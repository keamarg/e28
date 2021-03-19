const Project = {
    data() {
        return {
            styleObject: {
                backgroundImage: 'url(https://source.unsplash.com/random)',
            },
            timerCount: null,
            playerName: "",
            ready: false,
            guess: null,
            feedback: false,
            guessOptions: [],
            correct: false,
            computerScore: 0,
            playerScore: 0,
            points: null,
            finalScore: false,
            level: "easy",
            loaded: false,
            fallBackItems:
            {
                cat: "https://i.postimg.cc/RVs1xxKM/cat.jpg",
                cow: "https://i.postimg.cc/Sxn6y1fc/cow.jpg",
                dog: "https://i.postimg.cc/ZqfdDFq4/dog.jpg",
                elephant: "https://i.postimg.cc/jSWvhm5R/elephant.jpg",
                snake: "https://i.postimg.cc/FH43fHq5/snake.jpg",
                tiger: "https://i.postimg.cc/65bYntBH/tiger.jpg",
                bear: "https://i.postimg.cc/ZYXrScxq/bear.jpg",
                crocodile: "https://i.postimg.cc/LXn1dYqf/crocodile.jpg",
                spider: "https://i.postimg.cc/W1wr0PLD/spider.jpg",
                wolf: "https://i.postimg.cc/0jSKQT0y/wolf.jpg",
            },
            usedFallBackItems: {},
            image: null,
            word: "",
            hidden: true,
            queryUnsplash: "https://api.unsplash.com/photos/random?query=",
            queryUnsplashAnimal: "https://api.unsplash.com/photos/random?query=animal&query=",
            queryWords: "https://wordsapiv1.p.rapidapi.com/words/?random=true&partOfSpeech=noun&lettersMin=4&lettersMax=8&frequencyMin=5",
            apiKeyUnsplash: "&client_id=3PuWw0eAXi7CNWehCyheXrZjoWy1GsvJ9For49XeWj0",
            apiKeyWords: "&rapidapi-key=4e9b3cd58bmsh471fb84316da8d4p132465jsn14169d1252ca",
            gameMode: "random",
            randomAnimal: "https://random-word-form.herokuapp.com/random/animal",
            numberGames: 5,
            endScreen: false,
        }
    },
    computed: {
        fallBack() {
            let fallBackItem = Object.entries(this.fallBackItems)[Math.floor(Math.random() * Object.keys(this.fallBackItems).length)];
            return fallBackItem;
        },
        computerGuess() {
            computerGuess = this.guessOptions[Math.floor(Math.random() * (this.guessOptions.length))];
            return computerGuess;
        }
    },
    methods: {
        startGame() {
            this.finalScore = false;
            if (this.numberGames < 1) {
                this.numberGames = 6;
                this.playerScore = 0;
                this.computerScore = 0;
            }
            this.numberGames--;
            this.feedback = false;
            this.endScreen = false;
            if (this.correct) {
                this.guess = null;
                this.correct = false;
            } else {
                this.ready = true;
            }
            this.loaded = false;
            this.guessOptions = [];
            this.loadNewWord();
        },
        loadNewWord() {
            fetch(this.gameMode == "animals" ? this.randomAnimal : this.queryWords + this.apiKeyWords)
                .then(response => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    return response.json();
                })
                .then((data) => {
                    if (this.guessOptions.length < 2) {
                        this.guessOptions[this.guessOptions.length] = Object.values(data)[0];
                        this.loadNewWord();
                    } else {
                        this.word = Object.values(data)[0];
                        this.guessOptions.push(this.word);
                        this.loadNewImage();
                    }
                })
                .catch(err => {
                    console.error(err);
                });
        },
        loadNewImage() {
            fetch(this.animalGame ? this.queryUnsplashAnimal + this.word + this.apiKeyUnsplash : this.queryUnsplash + this.word + this.apiKeyUnsplash)
                //fetch(this.queryUnsplash + this.word + this.apiKeyUnsplash) //secret: 5UEvgy8ko5iTpAzrxgjnefTZJS9H4SYll_kK5ls7hWI other: 3PuWw0eAXi7CNWehCyheXrZjoWy1GsvJ9For49XeWj0
                .then((response) => {
                    if (!response.ok) {
                        console.log("loading fallback");
                        this.loadFallBack();
                    } else {
                        return response.json();
                    }
                })
                .then((data) => {
                    if (data == null) {
                        console.log("using fallback");
                    } else {
                        this.image = data.urls.raw + "&fit=crop&w=400&h=400";
                        this.randomizeArray(this.guessOptions);
                    }
                    this.loaded = true;
                })
                .catch(error => console.log(error));
        },
        loadFallBack() {
            this.word = Object.values(this.fallBack)[0];
            this.guessOptions.pop();
            this.guessOptions.push(this.word);
            this.randomizeArray(this.guessOptions);
            this.image = Object.values(this.fallBack)[1];
            this.usedFallBackItems[Object.values(this.fallBack)[0]] = this.image;
            delete this.fallBackItems[Object.values(this.fallBack)[0]];
            if (Object.keys(this.fallBackItems).length < 1) {
                this.fallBackItems = this.usedFallBackItems;
            }
        },
        showFeedback() {
            this.points = this.timerCount;
            this.checkGuess();
            if (this.numberGames < 1) {
                this.endScreen = true;
            } else {
                this.feedback = true;
            }
            if (this.level == "easy") {
                if (this.computerGuess == this.word) {
                    this.computerScore = this.timerCount - 1;
                } else {
                    this.computerScore = this.computerScore - 2;
                }
            } else if (this.level == "medium") {
                if (this.computerGuess == this.word) {
                    this.computerScore = this.timerCount;
                } else {
                    this.computerScore--;
                }
            } else if (this.level == "hard") {
                if (this.computerGuess == this.word) {
                    this.computerScore = this.timerCount + 1;
                } else {
                    this.computerScore--;
                }
            }
            if (this.correct) {
                this.playerScore = this.playerScore + this.timerCount;
            } else {
                this.playerScore--;
            }
        },
        randomizeArray(arr) {
            arr.sort(() => Math.random() - 0.5);
        },
        checkGuess() {
            return this.correct = this.word == this.guess;
        },
        showFinalScore() {
            this.finalScore = true;
        },
    }
}

//Timer code inspired by https://stackoverflow.com/questions/55773602/how-do-i-create-a-simple-10-seconds-countdown-in-vue-js
const CountdownTimer = {
    name: "CountdownTimer",
    data() {
        return {
            timerCount: 10,
            randomTime: Math.ceil(Math.random() * 10) + 1,
        }
    },
    props: {
        feedback: { type: Boolean },
        computerGuess: { type: String },
        guess: { type: null },
        endScreen: { type: Boolean },
    },
    watch: {
        timerCount: {
            handler(value) {
                if (value > 1) {
                    setTimeout(() => {
                        this.timerCount--;
                    }, 1000);
                }
                this.$emit("updateTime", this.timerCount);
            },
            immediate: true // This ensures the watcher is triggered upon creation
        }
    },
    template: "#countdown-timer",
}

const FeedbackText = {
    name: "FeedbackText",
    data() {
        return {};
    },
    props: {
        finalScore: { type: Boolean },
        computerScore: { type: Number },
        points: { type: Number },
        playerScore: { type: Number },
        playerName: { type: String },
        correct: { type: Boolean },
        guess: { type: String },
        computerGuess: { type: String },
        endScreen: { type: Boolean },
        feedback: { type: Boolean },
        word: { type: String },
        timerCount: { type: Number },
    },
    template: "#feedback-message",
}
const app = Vue.createApp(Project)
app.component("feedback-text", FeedbackText);
app.component("countdown-timer", CountdownTimer);
app.mount('#app');