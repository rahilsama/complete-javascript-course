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
