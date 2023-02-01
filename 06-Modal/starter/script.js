'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const xBtn = document.querySelector('.close-modal');

//console.log(btnShowModal);
const showModal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (const element of btnShowModal) {
  element.addEventListener('click', showModal);
}

xBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//Functions
