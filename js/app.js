import { bookmarkFunction } from './bookmark.js';

// import { toggleAnswer } from './js/toggleAnswer';

//Change color of bookmark
const bookmarks = document.querySelectorAll('[data-js="bookmark_js"]');
bookmarks.forEach(bookmarkFunction);
