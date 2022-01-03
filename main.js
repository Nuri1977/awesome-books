/* MOCH DATABASE    */
const books = [
  {
    name: 'Book1',
    author: 'Author1',
  },
  {
    name: 'Book2',
    author: 'Author2',
  },
];

/*  RENDERING BOOKS  */
const renderBooks = document.getElementById('render-books');
let renderItem = '';

for (let i = 0; i < books.length; i += 1) {
  renderItem = `
  <ul>
    <li>${books[i].name}</li>
    <li>${books[i].author}</li>
    <li><a id='delete' href="#">Remove</a></li>
  </ul>
  `;

  renderBooks.innerHTML += renderItem;
}

console.log(renderBooks);