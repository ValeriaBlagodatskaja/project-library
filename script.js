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

function displayBooks() {
  while (userBooks.firstChild) {
    userBooks.removeChild(userBooks.firstChild);
  }
  myLibrary.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = `"${book.title}" by ${book.author} ${book.pages} pages`;
    userBooks.appendChild(li);
  });
}

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
