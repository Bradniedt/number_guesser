let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.getElementById('guesses');
const guessResult = document.getElementById('guessResult');
const lastGuess = document.getElementById('lastGuess');
const guessText = document.getElementById('guessText');
const submitGuess = document.getElementById('submitGuess');
const guessInput = document.getElementById('guessInput');
const clearGuess = document.getElementById('clearGuess');
const resetButton = document.getElementById('resetButton');


let guessCounter = 1;


function evaluateGuess() {
  let userGuess = Number(guessInput.value);
  guessText.textContent = 'Your last guess was:';
  lastGuess.textContent = String(userGuess);

  if (userGuess >= 1 && userGuess <= 100) {
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
  } else if (Number.isInteger(userGuess)) {
    alert('You can only enter a guess between 1 and 100! Try again');
  } else {
    alert('You can only enter numerical guesses!');
  }


  guessCounter++;
  guessInput.value = '';
  guessInput.focus();
}

function resetGame() {
  guessCounter = 1;
  guessText.textContent = '';
  lastGuess.textContent = '';
  guessResult.textContent = '';
  guessInput.textContent = '';
}

function clearNumber() {
  guessInput.value = '';
}

submitGuess.addEventListener('click', evaluateGuess);
resetButton.addEventListener('click', resetGame);
clearGuess.addEventListener('click', clearNumber);
