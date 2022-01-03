/* VARIABLES   */
let books = [];
const renderBooks = document.getElementById('render-books');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addBook = document.querySelector('#addBook');
const localBooks = localStorage.getItem('booksStore');

/* Functions */
function render() {
  renderBooks.innerHTML = '';
  for (let i = 0; i < books.length; i += 1) {
    let renderItem = '';
    renderItem = `
    <ul>
      <li>${books[i].title}</li>
      <li>${books[i].author}</li>
      <li><a id="delete" name="${books[i].title}" href="#">Remove</a></li>
    </ul>
    <hr>
    `;
    renderBooks.innerHTML += renderItem;
  }
}

function getStore() {
  if (localBooks) {
    books = JSON.parse(localBooks);
  }
}

function setStore() {
  localStorage.setItem('booksStore', JSON.stringify(books));
}

function addNewBook() {
  const newBook = {
    title: titleInput.value,
    author: authorInput.value,
  };
  books.push(newBook);
  setStore();
  titleInput.value = '';
  authorInput.value = '';
  render();
}

function deleteBook(e) {
  const deleteName = e.target.name;
  books = books.filter((book) => book.title !== deleteName);
  setStore();
  render();
}

/* Add book */
addBook.addEventListener('click', addNewBook);

/* Delete books */
renderBooks.addEventListener('click', deleteBook);

/* LOCAL STROTAGE */
getStore();

/*  RENDERING BOOKS  */
render();
