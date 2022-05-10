// Bookmark

const bookmark = document.querySelector(".bookmark");

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("filled");
});

// Answer
const button = document.querySelector(".card__button");
const answer = document.querySelector(".answer");

button.addEventListener("click", () => {
  answer.classList.toggle("answer");
  button.textContent = "Hide Answer";
});
