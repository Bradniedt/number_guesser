let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.getElementById('guesses');
const guessResult = document.getElementById('guessResult');
const lastGuess = document.getElementById('lastGuess');
const guessText = document.getElementById('guessText');
const submitGuess = document.getElementById('submitGuess');
const guessInput = document.getElementById('guessInput');
const clearGuess = document.getElementById('clearGuess');

let guessCounter = 1;
let resetButton;


function evaluateGuess() {
  let userGuess = Number(guessInput.value);
  guessText.textContent = 'Your last guess was:';
  lastGuess.textContent = String(userGuess);
  if (userGuess === randomNumber) {
    guessResult.textContent = 'BOOM!';
    gameOver();
  } else {
      if (userGuess < randomNumber) {
        guessResult.textContent = "That is too low.";
      } else if (userGuess > randomNumber) {
        guessResult.textContent = "That is too high.";
      }
  }

  guessCounter++;
  guessInput.value = '';
  guessInput.focus();
}

submitGuess.addEventListener('click', evaluateGuess);