const showFormButton = document.getElementById("showFormButton");
const bookForm = document.getElementById("bookForm");
const userBooks = document.getElementById("userBooks");
const myDialog = document.getElementById("myDialog");

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
  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const li = document.createElement("li");
    const titleParagraph = document.createElement("p");
    titleParagraph.textContent = `"${book.title}"`;

    const authorParagraph = document.createElement("p");
    authorParagraph.textContent = `${book.author}`;

    const pagesParagraph = document.createElement("p");
    pagesParagraph.textContent = `${book.pages} pages`;

    const readButton = document.createElement("button");
    readButton.classList.add("readButton");
    readButton.textContent = "Read";
    readButton.addEventListener("click", function handleClick() {
      const initialText = "Read";

      if (readButton.textContent === initialText) {
        readButton.textContent = "Not read";
      } else {
        readButton.textContent = initialText;
      }
    });

    const removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      displayBooks();
    });

    li.appendChild(titleParagraph);
    li.appendChild(authorParagraph);
    li.appendChild(pagesParagraph);
    li.appendChild(readButton);
    li.appendChild(removeButton);

    card.appendChild(li);
    userBooks.appendChild(card);
  });
}

showFormButton.addEventListener("click", function () {
  myDialog.style.display = "block";
});

myDialog.addEventListener("submit", function (event) {
  event.preventDefault();
  addBookToLibrary();
  resetValues();
  myDialog.style.display = "none";
  displayBooks();
});
