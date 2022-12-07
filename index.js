// eslint-disable-next-line import/no-unresolved
import { DateTime } from './modules/luxon.js';
import { displayBooks, addNew, showContact } from './modules/addEvent.js';
import {
  pushToLocal,
  showBook,
  addBook,
  bookUpload,
} from './modules/add&Remove.js';

window.onload = () => {
  showBook();
};

const addBtn = document.querySelector('.add-btn');

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBook();
  bookUpload();
  pushToLocal();
});

const showDateAndTime = document.getElementById('date');
const now = DateTime.now();
showDateAndTime.innerHTML = now.toLocaleString(DateTime.DATETIME_MED);

const showBooks = document.querySelector('.Book-ListBtn');
const addNewBook = document.querySelector('.AddBook-Btn');
const displayContacts = document.querySelector('.contact');

showBooks.addEventListener('click', () => {
  displayBooks();
});

addNewBook.addEventListener('click', () => {
  addNew();
});

displayContacts.addEventListener('click', () => {
  showContact();
});
