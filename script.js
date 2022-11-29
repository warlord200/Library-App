const title = document.querySelector("#title");
const author = document.querySelector("#author");
const page = document.querySelector("#page");
const remarks = document.querySelector("#remarks");
const submit = document.querySelector("#submit");

let myLibrary = [];

function Book(title, author, page, remarks) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.remarks = remarks;
  this.info = function () {
    console.log(`${title} by ${author}, ${page} pages, ${remarks}`);
  };
  // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
}

function addBookToLibrary(title, author, page, remarks) {
  myLibrary.push(new Book(title, author, page, remarks));
}

submit.addEventListener(
  "click",
  (e) => {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const page = document.querySelector("#page");
    const remarks = document.querySelector("#remarks");
    e.preventDefault();
    addBookToLibrary(title.value, author.value, page.value, remarks.value);
    console.log(myLibrary);
  },
  false
);
