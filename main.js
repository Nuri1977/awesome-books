/* MOCH DATABASE    */
const books = [
  // {
  //   name: 'Book1',
  //   author: 'Author1',
  // },
  // {
  //   name: 'Book2',
  //   author: 'Author2',
  // },
];
console.log(books);

/*  RENDERING BOOKS  */
const renderBooks = document.getElementById('render-books');
let renderItem = '';
function render() {
for (let i = 0; i < books.length; i += 1) {
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

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addBook = document.querySelector('#addBook');


addBook.addEventListener('click', (e)  => {
     let title = titleInput.value;
     let author = authorInput.value;
     let newBook = {title, author};
     books.push(newBook)
     console.log('books:', books)

render();


});
