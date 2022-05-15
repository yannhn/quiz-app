import { bookmarkFunction } from './bookmark.js';
import { toggleAnswer } from './toggleAnswer.js';
import './toggleSites.js';

// import { toggleAnswer } from './js/toggleAnswer';

//Change color of bookmark
const bookmarks = document.querySelectorAll('[data-js="bookmark_js"]');
bookmarks.forEach(bookmarkFunction);

// toggle button and answer
const buttons = document.querySelectorAll('[data-js="button_js"]');
buttons.forEach(toggleAnswer);

// count strings

let textAreaQuestion = document.querySelector('.input__question');
let characterCounterQuestion = document.querySelector('.counter__question');

const countQuestion = () => {
  let counter = textAreaQuestion.value.length;
  characterCounterQuestion.textContent = counter;
};
textAreaQuestion.addEventListener('input', countQuestion);

let textAreaAnswer = document.querySelector('.input__answer');
let characterCounterAnswer = document.querySelector('.counter__answer');

const countAnswer = () => {
  let counter = textAreaAnswer.value.length;
  characterCounterAnswer.textContent = counter;
};
textAreaAnswer.addEventListener('input', countAnswer);
