import { bookContainer, bookTitle, bookAuthor } from './variables.js';

let bookList = [];

export const bookUpload = () => {
  bookContainer.innerHTML = '';
  bookList.forEach((book) => {
    bookContainer.innerHTML += `
      <div class="books">
        <div class ="book-wrapper"> 
          <div class="book-holder">
              <h3>"${book.title}"</h3>
              <h3>by</h3>
              <h3>${book.author}</h3>
          </div>   
          <button data-id="${book.id}" id="removeBtn" >Remove</button>
        </div>   
          <hr />
      </div>
     `;
    bookTitle.value = '';
    bookAuthor.value = '';
  });

  const bookRemoveBtn = document.querySelectorAll('#removeBtn');

  bookRemoveBtn.forEach((button) => {
    button.addEventListener('click', () => {
      const dataSet = parseInt(button.dataset.id, 10);
      const buttonId = bookList.findIndex((object) => object.id === dataSet);
      const deleted = (index) => {
        bookList.splice(index, 1);
        bookUpload();
        localStorage.setItem('bookList', JSON.stringify(bookList));
      };
      deleted(buttonId);
    });
  });
};

export const addBook = () => {
  const books = {};
  books.id = bookList.length;
  books.title = bookTitle.value;
  books.author = bookAuthor.value;
  bookList.push(books);
};

export const showBook = () => {
  if (localStorage.getItem('bookList')) {
    bookList = JSON.parse(localStorage.getItem('bookList'));
  }
  bookUpload();
};

export const pushToLocal = () => {
  localStorage.setItem('bookList', JSON.stringify(bookList));
};
