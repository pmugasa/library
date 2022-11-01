//array storing the books created
let myLibrary = [];

//book constructor
function Book(title, author, pages, state) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.state = state;
  this.info = function () {
    return `${title}, by ${author}, has ${pages} pages.  ${state}`;
  };
}

//function that adds books to the library

function addBookToLibrary() {
  // getting book information
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const state = document.getElementById("state").value;

  //creating a book
  const book = new Book(title, author, pages, state);
  myLibrary.push(book);

  myLibrary.forEach((book) => {
    const para = document.createElement("p");
    para.textContent = book.title;
    const div = document.getElementById("div");
    div.appendChild(para);
  });
}

//handling form on submit
const btn = document
  .getElementById("btn")
  .addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
  });
