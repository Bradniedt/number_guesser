let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.getElementById('guesses');
const guessResult = document.getElementById('guessResult');
const lastGuess = document.getElementById('lastGuess');
const guessText = document.getElementById('guessText');
const submitGuess = document.getElementById('submitGuess');
const guessInput = document.getElementById('guessInput');
const clearGuess = document.getElementById('clearGuess');
const resetButton = document.getElementById('resetButton');
const body = document.getElementById('theBody');


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

function disableClear() {
  if (guessInput.value === '') {
    document.getElementById('clearGuess').disabled = true;
  } else {
    document.getElementById('clearGuess').disabled = false;
  }
}

function disableReset() {
  if (guessCounter === 1) {
    document.getElementById('resetButton').disabled = true;
  } else {
    document.getElementById('resetButton').disabled = false;
  }
}

submitGuess.addEventListener('click', evaluateGuess);
resetButton.addEventListener('click', resetGame);
clearGuess.addEventListener('click', clearNumber);
guessInput.addEventListener('focus', disableReset);
body.addEventListener('mouseover', disableReset);
body.addEventListener('mouseover', disableClear);
guessInput.addEventListener('focus', disableClear);
guessInput.addEventListener('keyup', disableClear);
submitGuess.addEventListener('click', disableReset);
