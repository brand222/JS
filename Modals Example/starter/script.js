'use strict';
//created variables for the elements on the screen
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//querySelectorAll gives you all the elements with the matching selector
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

//created close modal functionality
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//created open modal functionality
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//this for loop adds the click event listener to all elements matching the selector
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

//CLOSE MODAL FUNCTIONALITY
btnCloseModal.addEventListener('click', closeModal);

//click overlay close-out
overlay.addEventListener('click', closeModal);

//keyboard events (keydown = upon hitting any key)
document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
