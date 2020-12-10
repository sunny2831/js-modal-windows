'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const showModalBtns = document.querySelectorAll('.show-modal');
console.log(showModalBtns);

for (let i = 0; i < showModalBtns.length; i++)
  console.log(showModalBtns[i].textContent);
