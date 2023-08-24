const showFormButton = document.getElementById("showFormButton");
const bookForm = document.getElementById("bookForm");
const userBooks = document.getElementById("userBooks");

const myLibrary = [];

function addBookToLibrary() {
  const title = bookForm.elements.title.value;
  const author = bookForm.elements.author.value;
  const pages = bookForm.elements.pages.value;
  myLibrary.push({ title, author, pages });
}

function resetValues() {
  bookForm.elements.title.value = "";
  bookForm.elements.author.value = "";
  bookForm.elements.pages.value = "";
}

function displayBooks() {}

showFormButton.addEventListener("click", function () {
  bookForm.style.display = "block";
});

bookForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addBookToLibrary();
  resetValues();
  bookForm.style.display = "none";
  displayBooks();
});
