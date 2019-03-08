var randomNumber = Math.floor(Math.random() * 100) + 1;
// sets a variable called randomNumber to be a number between 0 and 100.
var guessResult = document.getElementById('guessResult');
// sets a variable called guessResult to call when I need to get the result.
var lastGuess = document.getElementById('lastGuess');
// sets a variable called lastGuess to call when I need to access the last guess.
var guessText = document.getElementById('guessText');
// sets a variable for the guess text input.
const submitGuess = document.getElementById('submitGuess');
// sets a constant for the submit button.
const submitNumber = document.getElementById('submitNumber');
// sets a constant for the set number button.
const guessInput = document.getElementById('guessInput');
// sets a constant for the guess input.
const lowNumInput = document.getElementById('numberInputLow');
// sets a constant for the low number input.
const highNumInput = document.getElementById('numberInputHigh');
// sets a constant for the high number input.
const clearGuess = document.getElementById('clearGuess');
// sets a constant for the clear guess button.
const resetButton = document.getElementById('resetButton');
// sets a constant for the reset button.
const body = document.getElementById('theBody');
// sets a constant for the html body.
let guessCounter = 1;
//  sets a variable called guesscounter and sets value to 1


function evaluateGuess() {
  // declares a function called evaluate guess for checking a guess.
  let userGuess = Number(guessInput.value);
  // sets a variable for the guess and evaluates it as a number.
  guessText.textContent = 'Your last guess was:';
  // sets the text of the guessText variable after a guess.
  lastGuess.textContent = String(userGuess);
  // sets the text value of lastGuess to be the guess number.
  var low = parseInt(lowNumInput.value);
  // sets a variable for the low number to use for the error message.
  high= parseInt(highNumInput.value);
  // sets a variable for the high number to use for the error message.
  if (userGuess >= low && userGuess <= high) {
    // starts an if statement to return true if the user guess is within the range numbers.
      if (userGuess === randomNumber) {
        // starts an if statement to return true if the user guess matches the random number.
        guessResult.textContent = 'BOOM!';
        //  if the user's guess is correct, guessResult will display boom.
        gameOver();
        //  if the user's guess is corrent, it calls the gameOver funciton.
      } else {
        //  if the guess is within range but not a correct guess
          if (userGuess < randomNumber) {
            //  if the guess is lower than the random number
            guessResult.textContent = "That is too low";
            // guessResult will display the text above
          } else if (userGuess > randomNumber) {
            // if the guess is higher than the random number
            guessResult.textContent = "That is too high";
            // guessResult will display the text above
          }
      }
  } else if (Number.isInteger(userGuess)) {
    // if the guess is a number, but not within the range
    alert("You can only enter a guess between " + low + " and " + high + ". Try again!");
    // this will alert the user that their guess must be within the range
  } else {
    // if the guess is not a number
    alert('You can only enter numerical guesses!');
    // this will alert the user that they can only submit numerical answers
  }

  guessCounter ++;
  // this adds 1 to the guess counter
  guessInput.value = '';
  // this will clear the guess input value
  guessInput.focus();
  // this will place the cursor focused on the guess input
}

function resetGame() {
  // declares a function called resetGame
  guessText.textContent = '';
  // this sets the guess text input to blank
  lastGuess.textContent = '';
  // this sets the last guess value to blank
  guessResult.textContent = '';
  // this sets the guess result value to blank
  guessInput.textContent = '';
  // this sets the guess input value to blank
}

function clearNumber() {
  // declares a function called clearNumber
  guessInput.value = '';
  // this sets the guess input value to blank
}

function disableClear() {
  // declares a function called disableClear
  if (guessInput.value === '') {
    //  this returns true if the guess input value is blank
    document.getElementById('clearGuess').disabled = true;
    // this gets the clearGuess button and disables it
  } else {
    // if the guess input value is not blank
    document.getElementById('clearGuess').disabled = false;
    // this gets the clearGuess button and enables it
  }
}

function disableReset() {
  // declares a function called disableReset
  if (guessCounter === 1) {
    // this returns true if the guess counter is 1
    document.getElementById('resetButton').disabled = true;
    // this gets the reset button and disables it
  } else {
    // if the guess counter is not 1
    document.getElementById('resetButton').disabled = false;
    // this gets the reset button and enables it
  }
}

function setRangeRandom() {
  // declares a function called setRangeRandom
  var lowNum = lowNumInput.value;
  // sets a variable for the value in the low number input
  var highNum = highNumInput.value;
  // sets a variable for the value in the high number input
  randomNumber = Math.floor(Math.random() * (highNum - lowNum + 1) + lowNum);
  // this assigns a new value of a random number within the new range
}

function setWinRange() {
  // declares a function called setWinRange
  var newLowNum = (parseInt(lowNum) - 10);
  // this sets a new variable with 10 added to the lowNum
  var newHighNum = (parseInt(highNum) + 10);
  // this sets a new variable with 10 added to the highNum
  randomNumber = Math.floor(Math.random() * (newHighNum - newLowNum + 1) + newLowNum);
  // this assigns a new value of a random number within the new range
}

function gameOver() {
  // declares a function called gameOver
  alert('Sweet win! Lets up the ante by setting your low number lower by 10, and your high number higher by 10.');
  // this alerts a player that they've won the game and that the numbers are changing.
  setWinRange();
  // this calls a funciton called setWinRange
}

submitGuess.addEventListener('click', evaluateGuess);
// this is an event listener listening for a click on the guess submit button, when there is a click, it calls the evaluate guess function.
resetButton.addEventListener('click', resetGame);
// this is an event listener listening for a click on the guess reset button, when there is a click, it calls the reset game function.
body.addEventListener('mouseover', disableReset);
// this is an event listener listening for a hover on the html body, when there is a hover, it calls the reset disable reset function.
body.addEventListener('mouseover', disableClear);
// this is an event listener listening for a hover on the html body, when there is a hover, it calls the disable clear function.
guessInput.addEventListener('focus', disableClear);
// this is an event listener listening for a focus on the guess input field, when there is a focus, it calls the disable clear function.
guessInput.addEventListener('keyup', disableClear);
// this is an event listener listening for a keyup event on the guess input, when there is a keyup, it calls the disable clear function.
submitGuess.addEventListener('click', disableReset);
// this is an event listener listening for a click on the submit guess button, when there is a click, it calls the disable reset function.
submitNumber.addEventListener('click', setRangeRandom);
// this is an event listener listening for a click on the submit number button, when there is a click, it calls the set range random funciton.
