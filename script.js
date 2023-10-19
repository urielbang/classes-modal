'use strict';
const modal = document.querySelector('.modal'); // class hidden
const overlay = document.querySelector('.overlay'); // display blur
const btnCloseModal = document.querySelector('.close-modal'); // butten exit
const btnsOpenMadal = document.querySelectorAll('.show-modal'); // the buttons
const openMaodal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeMaodal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenMadal.forEach(element => {
  element.addEventListener('click', openMaodal);
});
btnCloseModal.addEventListener('click', closeMaodal);

overlay.addEventListener('click', closeMaodal);
//!kepress
document.addEventListener('keydown', e => {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    closeMaodal();
  }
});
