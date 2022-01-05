const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
const dateTime = `${date} ${time}`;

const navList = document.getElementById('book-list');
const navAdd = document.getElementById('add-book');
const navContact = document.getElementById('contact');
const sectionBook = document.getElementById('section-list');
const sectionAdd = document.getElementById('book-form');
const sectionContact = document.getElementById('contact-info');

/* RENDER TIME */
document.getElementById('time').textContent = dateTime;

/*  NAVIGATION */
navList.addEventListener('click', () => {
  navList.classList.add('active');
  sectionBook.classList.remove('hide-content');
  sectionAdd.classList.add('hide-content');
  sectionContact.classList.add('hide-content');
});

navList.addEventListener('click', () => {
  navList.classList.add('active');
  navAdd.classList.remove('active');
  navContact.classList.remove('active');

  sectionBook.classList.remove('hide-content');
  sectionAdd.classList.add('hide-content');
  sectionContact.classList.add('hide-content');
});

navAdd.addEventListener('click', () => {
  navList.classList.remove('active');
  navAdd.classList.add('active');
  navContact.classList.remove('active');

  sectionBook.classList.add('hide-content');
  sectionAdd.classList.remove('hide-content');
  sectionContact.classList.add('hide-content');
});

navContact.addEventListener('click', () => {
  navList.classList.remove('active');
  navAdd.classList.remove('active');
  navContact.classList.add('active');

  sectionBook.classList.add('hide-content');
  sectionAdd.classList.add('hide-content');
  sectionContact.classList.remove('hide-content');
});