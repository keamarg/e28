// The Vue instance
const app = new Vue({
  el: "#app",
  data: {
    "playerName": null,
    "guess": null,
    "guesses":[],
    "number":Math.floor(Math.random()*100)+1,
    "guessed":false
  },
  methods: {
    guessNumber: function (){
      this.guesses.push(this.guess);
      this.guessed=true;
    },
    createRandom: function (){
      return  Math.floor(Math.random()*100)+1;
    },
    clearGame: function (){
      while (this.guesses.length>0){
        this.guesses.pop();
      }
      this.guess=null;
      this.guessed=false;
    }
  }
});

