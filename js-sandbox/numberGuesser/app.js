/*
GAME:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = Math.floor(Math.random() * max) + 1,
    guessesLeft = 3;

console.log(winningNum);

// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');
      
// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

function checkAnswer(guess) {
  if (guess === winningNum) {
    setMessage(`congrats! you have guessed correctly.`, 'green');
    guessInput.style.borderColor = "green";
    guessInput.disabled = true;
    guessBtn.value = "Play again";
  } else {
    if (guessesLeft === 0) {
      setMessage(`Sorry, you have no guesses left. Correct answer is ${winningNum}.`, 'red');
      guessInput.value = '';
      guessInput.disabled = true;
      guessBtn.value = "Play again";
    }
    else {
      setMessage(`Incorrect, you have ${guessesLeft} ${guessesLeft > 1 ? 'guesses' : 'guess'} left`, 'red')
      guessInput.style.borderColor = 'red';
      guessInput.value = '';
    }
  }
}

function validateGuess(guess) {
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
  } else {
    guessesLeft--;
    checkAnswer(guess);
  }
}
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = `${color}`;
}

function handleClick(e) {
  if (this.value === 'Play again') {
    this.value = 'submit';
    guessesLeft = 3;
    guessInput.disabled = false;
    guessInput.value = '';
    guessInput.style.borderColor = 'grey';
    message.textContent = '';
    winningNum = Math.floor(Math.random() * max) + 1;
    console.log(winningNum);
    
  } else {
    let guess = parseInt(guessInput.value);
    validateGuess(guess);
  }
}

guessBtn.addEventListener('click', handleClick);