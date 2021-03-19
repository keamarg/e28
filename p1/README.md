# Project 1
+ By: Martin Gundtoft
+ Production URL: http://e28p1.hesdev.com/

## Outside resources
+ CSS for dropdowns from https://codepen.io/raubaca/pen/VejpQP
+ Timer code inspired by https://stackoverflow.com/questions/55773602/how-do-i-create-a-simple-10-seconds-countdown-in-vue-js
+ API for words: https://rapidapi.com/dpventures/api/wordsapi
+ API for images: https://unsplash.com/documentation
+ Bootstrap spinner: https://getbootstrap.com/docs/4.4/components/spinners/

## Notes for instructor
### Requirements
I have a few comments to these requirements:

* Keep track of a) a running score and b) results of each round of the game played.
  * I have a running score, and each time a round is done the score is updated. Hope that is OK?
* Provide the option to reset the score and results.
  * After a game, you can restart and the score is reset.
* There must not be any warnings or errors in the inspector console.
  * Chrome throws some sort of UID error in localhost, but not on the production server. A bit of googling led me to believe this is normal.
  * Sometimes the word API will return a weird object instead of a word, throwing an error (external issue).
  * If the API does not have anymore "freebies", I have created a fallback solution. This will give an error in the console when the API "says no".
