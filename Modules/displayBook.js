/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */

import {
  bookContainer,
  bookTitle,
  bookAuthor,
  addBtn,
} from './modules/variables.js';

let bookList = [];

class SingleBook {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const DisplayBook = () => {
  bookContainer.innerHTML = '';
  for (let i = 0; i < bookList.length; i += 1) {
    bookContainer.innerHTML += `
      <div class="books">
        <div class ="book-wrapper"> 
          <div class="book-holder">
              <h3>"${bookList[i].title}"</h3>
              <h3>by</h3>
              <h3>${bookList[i].author}</h3>
          </div>   
          <button onclick="DisplayBook.deleted(${i})" id='removeBtn' >Remove</button>
        </div>   
          <hr />
      </div>
     `;
    bookTitle.value = '';
    bookAuthor.value = '';
  }
};

const deleted = (index) => {
  bookList.splice(index, 1);
  DisplayBook.bookUpload();
  localStorage.setItem('bookList', JSON.stringify(bookList));
};

const addBook = () => {
  const books = new SingleBook(bookTitle.value, bookAuthor.value);
  bookList.push(books);
};

const showBook = () => {
  if (localStorage.getItem('bookList')) {
    bookList = JSON.parse(localStorage.getItem('bookList'));
  }
  DisplayBook.bookUpload();
};

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  DisplayBook.addBook();
  DisplayBook.bookUpload();
  localStorage.setItem('bookList', JSON.stringify(bookList));
});

export { showBook, addBook };
