var randomNumber = Math.floor(Math.random() * 100) + 1;
var guessResult = document.getElementById('guessResult');
var lastGuess = document.getElementById('lastGuess');
var guessText = document.getElementById('guessText');
const submitGuess = document.getElementById('submitGuess');
const submitNumber = document.getElementById('submitNumber');
const guessInput = document.getElementById('guessInput');
const lowNumInput = document.getElementById('numberInputLow');
const highNumInput = document.getElementById('numberInputHigh');
const clearGuess = document.getElementById('clearGuess');
const resetButton = document.getElementById('resetButton');
const body = document.getElementById('theBody');


let guessCounter = 1;


function evaluateGuess() {
  let userGuess = Number(guessInput.value);
  guessText.textContent = 'Your last guess was:';
  lastGuess.textContent = String(userGuess);
  low = parseInt(lowNumInput.value);
  high= parseInt(highNumInput.value);

  if (userGuess >= low && userGuess <= high) {
      if (userGuess === randomNumber) {
        guessResult.textContent = 'BOOM!';
        gameOver();
      } else {
          if (userGuess < randomNumber) {
            guessResult.textContent = "That is too low";
          } else if (userGuess > randomNumber) {
            guessResult.textContent = "That is too high";
          }
      }
  } else if (Number.isInteger(userGuess)) {
    alert("You can only enter a guess between " + low + " and " + high + ". Try again!");
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

function setRangeRandom() {
  var lowNum = lowNumInput.value;
  var highNum = highNumInput.value;
  var calcNum = (highNum - lowNum +1);
  randomNumber = Math.floor(Math.random() * (highNum - lowNum + 1) + lowNum);
}

function setWinRange() {
  var newLowNum = (parseInt(lowNum) - 10);
  var newHighNum = (parseInt(highNum) + 10);
  randomNumber = Math.floor(Math.random() * (newHighNum - newLowNum + 1) + newLowNum);
}

function gameOver() {
  alert('Sweet win! Lets up the ante by setting your low number lower by 10, and your high number higher by 10.');
  setWinRange();
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
submitNumber.addEventListener('click', setRangeRandom);
