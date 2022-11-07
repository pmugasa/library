//array storing the books created
let myLibrary = [];

let div = document.getElementById("div");
// make a book constructor
function Book(title, author, pages, state) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.state = state;
  this.info = function () {
    return `${title}, by ${author}, has ${pages} pages.  ${state}`;
  };
}
function getUserInputs() {
  // get the values from the user
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const state = document.getElementById("state").value;

  return new Book(title, author, pages, state);
}
// use the values to make the book
function addToLibrary() {
  const newbook = getUserInputs();
  if (!myLibrary.includes(newbook)) {
    myLibrary.push(newbook);
  }
}
// store the book in an array
// when a button is clicked and the form is submited loop through the array and show the books
const form = document.getElementById("my-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  addToLibrary();

  displayBook();
  form.reset();
}

// display books
function displayBook() {
  removeCreatedElements(document.getElementsByTagName("p"));
  myLibrary.forEach((book) => {
    const para = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    para.textContent = "TITLE:" + " " + book.title;
    para2.textContent = "AUTHOR:" + " " + book.author;
    para3.textContent = "NUMBER OF PAGES:" + " " + book.pages;

    div.appendChild(para);
    div.appendChild(para2);
    div.appendChild(para3);
    console.log(book);
  });
}

function removeCreatedElements(elements) {
  for (let index = 0; index < elements.length; index++) {
    elements[index].parentNode.removeChild(elements[index]);
  }
}

//if the array has a book when a user clicks this remove the divs and readd them again
//check if the array has any book
//if does remove paragraphs
//if it doesn't go ahead and create them
