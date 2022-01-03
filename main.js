/* VARIABLES   */
const books = [];
const renderBooks = document.getElementById('render-books');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addBook = document.querySelector('#addBook');

/* Functions */
function render() {
  renderBooks.innerHTML = '';
  for (let i = 0; i < books.length; i += 1) {
    let renderItem = '';
    renderItem = `
    <ul>
      <li>${books[i].title}</li>
      <li>${books[i].author}</li>
      <li><a id='delete' href="#">Remove</a></li>
    </ul>
    <hr>
    `;
    renderBooks.innerHTML += renderItem;
  }
}

function addNewBook() {
  const newBook = {
    title: titleInput.value,
    author: authorInput.value,
  };
  books.push(newBook);
  titleInput.value = '';
  authorInput.value = '';
  render();
}

/*  RENDERING BOOKS  */
render();

/* Add book */
addBook.addEventListener('click', addNewBook);
