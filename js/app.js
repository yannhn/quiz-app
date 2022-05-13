import { bookmarkFunction } from './bookmark.js';
import { toggleAnswer } from './toggleAnswer.js';

// import { toggleAnswer } from './js/toggleAnswer';

//Change color of bookmark
const bookmarks = document.querySelectorAll('[data-js="bookmark_js"]');
bookmarks.forEach(bookmarkFunction);

// toggle button and answer
const buttons = document.querySelectorAll('[data-js="button_js"]');
buttons.forEach(toggleAnswer);
