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

//When pressing any of the buttons
for (const element of btnShowModal) {
  element.addEventListener('click', showModal);
}

//When the X is clicked
xBtn.addEventListener('click', closeModal);

//When clicked on the overlay screen
overlay.addEventListener('click', closeModal);

//When pressing esc
document.addEventListener('keydown', function (e) {
  console.log('Key was pressed');
  //'e' has access to the event and knows whihc key was presses
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//Functions
