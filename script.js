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
