const showFormButton = document.getElementById("showFormButton");
const bookForm = document.getElementById("bookForm");
const userBooks = document.getElementById("userBooks");
const myDialog = document.getElementById("myDialog");
const backdrop = document.getElementById("backdrop");

const myLibrary = [];

function addBookToLibrary() {
  const title = bookForm.elements.title.value;
  const author = bookForm.elements.author.value;
  const pages = bookForm.elements.pages.value;
  const read = bookForm.elements.checkBox.checked;
  myLibrary.push({ title, author, pages, read });
}

function resetValues() {
  bookForm.elements.title.value = "";
  bookForm.elements.author.value = "";
  bookForm.elements.pages.value = "";
  bookForm.elements.checkBox.checked = false;
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
    readButton.textContent = book.read ? "Read" : "Not read";
    readButton.classList.add("readButton");

    readButton.addEventListener("click", function handleClick() {
      if (book.read === true) {
        book.read = false;
      } else {
        book.read = true;
      }
      displayBooks();
    });

    const removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      displayBooks();
    });

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer");
    buttonContainer.appendChild(readButton);
    buttonContainer.appendChild(removeButton);

    li.appendChild(titleParagraph);
    li.appendChild(authorParagraph);
    li.appendChild(pagesParagraph);
    li.appendChild(buttonContainer);

    card.appendChild(li);
    userBooks.appendChild(card);
  });
}

showFormButton.addEventListener("click", function () {
  myDialog.style.display = "block";
  backdrop.style.display = "block";
});

const closeFormButton = document.getElementById("closeFormButton");

closeFormButton.addEventListener("click", () => {
  myDialog.style.display = "none";
  backdrop.style.display = "none";
});

backdrop.addEventListener("click", function () {
  myDialog.style.display = "none";
  backdrop.style.display = "none";
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    myDialog.style.display = "none";
    backdrop.style.display = "none";
  }
});

myDialog.addEventListener("submit", function (event) {
  event.preventDefault();
  addBookToLibrary();
  resetValues();
  backdrop.style.display = "none";
  myDialog.style.display = "none";
  displayBooks();

  console.log(myLibrary);
});
