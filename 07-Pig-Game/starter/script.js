'use strict';

//elements stored into variables
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let score1El = document.querySelector('#score--0');
let score2El = document.querySelector('#score--1');
const currentScore1El = document.getElementById('current--0');
const currentScore2El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnnew = document.querySelector('.btn--new');
let scores, currentScore, activePlayer, playing;
let diceRoll;

const init = function () {
  //starting conditions
  score1El.textContent = 0;
  score2El.textContent = 0;
  diceEl.classList.add('hidden');
  scores = [0, 0];
  currentScore = 0;
  diceRoll = 0;
  activePlayer = 0;
  playing = true;
  currentScore1El.textContent = currentScore;
  currentScore2El.textContent = currentScore;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(
    `current--${activePlayer}`
  ).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//CLICKING THE ROLL DICE BUTTON
btnRollDice.addEventListener('click', function () {
  if (playing) {
    //generate random dice roll
    diceRoll = Math.trunc(Math.random() * 6 + 1);
    //display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceRoll}.png`;
    console.log(diceRoll);
    //check for a rolled 1
    if (diceRoll !== 1) {
      //add the diceRoll to the current score
      currentScore += diceRoll;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // scores[activePlayer] = 0;
      // document.getElementById(`score--${activePlayer}`).textContent =
      //   scores[activePlayer];
      //switch to next player
      switchPlayer();
    }
  }
});

//CLICKING THE HOLD BUTTON
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active players totalScore
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      playing = false;
      ``;
      //finish game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }

  // switch to the next player
});

btnnew.addEventListener('click', init);
