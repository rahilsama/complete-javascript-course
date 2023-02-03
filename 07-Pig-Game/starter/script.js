'use strict';

let currentScore = 0;
let currentPlayer = 0;

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

//Setting score to the zero when the game starts
score0.textContent = 0;
score1.textContent = 0;

//hiding the dice when first starting the game using its class
const dice = document.querySelector('.dice');
dice.classList.add('hidden');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//Rolling the dice
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

btnRoll.addEventListener('click', function () {
  console.log('Roll button clicked');
  //the variable randNUM calculates a random number between 1 and 6 (inclusive) which will be used to find out which dice will be shown and
  //calculate the score accordingly
  let diceRoll = Math.trunc(Math.random() * 6) + 1;
  console.log('Random number: ' + diceRoll);

  //Display the dice roll according random dice roll
  dice.classList.remove('hidden');
  dice.src = `dice-${diceRoll}.png`;

  //Check for rolled 1
  if (diceRoll !== 1) {
    //Add the rolled score to the player's current score
    currentScore += diceRoll;
    if (currentPlayer === 0) {
      current0EL.textContent = currentScore;
    } else {
      current1EL.textContent = currentScore;
    }
  } else {
    //Reset player's current score to 0 and change player
    currentScore = 0;

    if (currentPlayer == 0) {
      currentPlayer = 1;
      current0EL.textContent = currentScore;
      //swap the active player color
      player0.classList.remove('player--active');
      player1.classList.add('player--active');
    } else {
      currentPlayer = 0;
      current1EL.textContent = currentScore;
      //swap the active player color
      player1.classList.remove('player--active');
      player0.classList.add('player--active');
    }

    //Change the score side
  }
});

btnNew.addEventListener('click', function () {
  //reset the game and everything
});

btnHold.addEventListener('click', function () {
  currentScore = 0;
  if (currentPlayer === 0) {
    score0.textContent = current0EL.textContent;
    currentPlayer = 1;
    current0EL.textContent = currentScore;
    //swap the active player color
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  } else {
    score1.textContent = current1EL.textContent;
    currentPlayer = 0;
    current1EL.textContent = currentScore;
    //swap the active player color
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
  }
});
//
