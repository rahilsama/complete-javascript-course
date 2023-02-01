'use strict';

let p1Score = 0;
let p2Score = 0;

const score1 = document.getElementById('score--0');
const score2 = document.getElementById('score--1');

//Setting score to the zero when the game starts
score1.textContent = 0;
score2.textContent = 0;

//hiding the dice when first starting the game using its class
const dice = document.querySelector('.dice');
dice.classList.add('hidden');

//Rolling the dice
const btnRoll = document.querySelector('.btn--roll');

btnRoll.addEventListener('click', function () {
  console.log('Roll button clicked');
  //the variable randNUM calculates a random number between 1 and 6 (inclusive) which will be used to find out which dice will be shown and
  //calculate the score accordingly
  let randNum = Math.floor(Math.random() * 6) + 1;
  console.log('Random number: ' + randNum);
  switch (randNum) {
    case 1:
      console.log(randNum);
      break;
    case 2:
      console.log(randNum);
      break;
    case 3:
      console.log(randNum);
      break;
    case 4:
      console.log(randNum);
      break;
    case 5:
      console.log(randNum);
      break;
    default:
      console.log(randNum);
      break;
  }
});
