//Change color of bookmark
const bookmark = document.querySelector('.bookmark');

bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('filled');
});

//Show answer
const button = document.querySelector('.card__button');
const answer = document.querySelector('.hidden');

button.addEventListener('click', () => {
  if (button.textContent === 'Show Answer') {
    button.textContent = 'Hide Answer';
  } else {
    button.textContent = 'Show Answer';
  }
  answer.classList.toggle('.hidden');
  //this works but not chnages back afterwards
});
