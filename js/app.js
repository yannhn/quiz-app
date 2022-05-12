//Change color of bookmark
const bookmark = document.querySelectorAll('.bookmark');

bookmark.forEach(bookmark => {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('filled');
  });
});

//Show answer
