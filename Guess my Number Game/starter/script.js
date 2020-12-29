'use strict';
/*
//get the element
console.log(document.querySelector('.message'));
//get the text from the element
console.log(document.querySelector('.message').textContent);
//setting an element's text
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//here is our randomly-generated number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`the secret number is ${secretNumber}`);
let score = 20;
let highScore = 0;
let defaultBackgroundColor = document.querySelector('body').style
  .backgroundColor;
let defaultNumberWidth = document.querySelector('.number').style.width;
let defaultMessage = document.querySelector('.message').textContent;
let defaultScore = document.querySelector('.score').value;
let defaultNumberValue = document.querySelector('.number').textContent;

const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

//display that randomly-generated number on the screen
//document.querySelector('.number').textContent = secretNumber;
/*An event is something that happens on the page */

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //here we log the actual secretNumber
  console.log(typeof guess, guess);

  //WHEN THERE IS NO GUESS
  if (!guess) {
    displayMessage('No Number!');

    //WHEN THE GUESS IS CORRECT
  } else if (guess <= 0) {
    document.querySelector('.guess').value = '';
    alert('You must enter a positive number');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('YOU WIN!');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    score = Number(document.querySelector('.score').textContent);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //WHEN THE GUESS IS WRONG
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `too high!` : `too low!`);

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});
/*
Implement the game reset functionality, so that the player can make a new guess!

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and number vars
3. Restore the initial conditions of the message, number, score, and guess input
fields
4. Also, restore the original background color (#222) and number width (15rem);
*/
document.querySelector('.again').addEventListener('click', function () {
  //reset the secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  //reset the background color
  document.querySelector('body').style.backgroundColor = defaultBackgroundColor;
  //reset the guess value to blank
  document.querySelector('.guess').value = '';
  //reset the message value
  displayMessage(defaultMessage);
  //reset the number width
  document.querySelector('.number').style.width = defaultNumberWidth;
  //reset the number value
  document.querySelector('.number').textContent = defaultNumberValue;
  //reset the score
  score = 20;
  document.querySelector('.score').textContent = score;
});
