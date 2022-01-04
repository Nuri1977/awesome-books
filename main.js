/* VARIABLES   */
let books = [];
const renderBooks = document.getElementById('render-content');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addBook = document.querySelector('#addBook');
const localBooks = localStorage.getItem('booksStore');

/* CLASS BOOK */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static addItem(title, author) {
    if (title !== '' && author !== '') {
      const newBook = new Book(title, author);
      books.push(newBook);
    } else {
      alert('Please fill out the fields in the book form');
    }
  }

  static deleteItem(deleteName) {
    books = books.filter((book) => book.title !== deleteName);
  }
}

/* Functions */
function render() {
  renderBooks.innerHTML = '';
  for (let i = 0; i < books.length; i += 1) {
    let renderItem = '';
    renderItem = `
    <tr>
      <td>
        <h2>"${books[i].title}" by ${books[i].author}</h2>
      </td>
      <td><a class='delete' name="${books[i].title}" href="#">Remove</a></td>
    </tr>
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

function addNewBook(event) {
  event.preventDefault();
  Book.addItem(titleInput.value, authorInput.value);
  setStore();
  titleInput.value = '';
  authorInput.value = '';
  render();
}

function deleteBook(e) {
  Book.deleteItem(e.target.name);
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
