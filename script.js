const title = document.querySelector("#title");
const author = document.querySelector("#author");
const page = document.querySelector("#page");
const remarks = document.querySelector("#remarks");
const submit = document.querySelector("#submit");

let myLibrary = [];

function book(title, author, page, remarks) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.remarks = remarks;
  // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
}
book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.page} pages, ${this.remarks}`;
};

function addBookToLibrary(title, author, page, remarks) {
  myLibrary.push(new book(title, author, page, remarks));
}

// function that updates the library //

function updateLibrary() {
  const bookList = document.querySelector("#book-list");
  const card = document.createElement("div");
  card.classList.add("card");
  bookList.appendChild(card);
  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");
  const cardAuthor = document.createElement("div");
  cardAuthor.classList.add("card-author");
  const cardPage = document.createElement("div");
  cardPage.classList.add("card-page");
  const cardRemarks = document.createElement("div");
  cardRemarks.classList.add("card-remarks");
  const cardDelete = document.createElement("button");
  cardDelete.classList.add("card-delete");
  cardDelete.innerHTML = "Delete";
  cardTitle.textContent = title.value;
  cardAuthor.textContent = author.value;
  cardPage.textContent = page.value;
  cardRemarks.textContent = `"${remarks.value}"`;
  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  card.appendChild(cardPage);
  card.appendChild(cardRemarks);
  card.appendChild(cardDelete);
  cardDelete.addEventListener("click", (e) => {
    card.remove();
  });
}

submit.addEventListener(
  "click",
  (e) => {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const page = document.querySelector("#page");
    const remarks = document.querySelector("#remarks");
    e.preventDefault();
    if (
      title.value === "" ||
      author.value === "" ||
      page.value === "" ||
      remarks.value === ""
    )
      return;
    addBookToLibrary(title.value, author.value, page.value, remarks.value);
    console.log(myLibrary);
    updateLibrary();
  },
  false
);
