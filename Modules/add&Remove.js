import { bookContainer, bookTitle, bookAuthor } from './variables.js';

let bookList = [];

export const bookUpload = () => {
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
          <button onclick="DisplayBook.deleted(${i})" id="removeBtn" >Remove</button>
        </div>   
          <hr />
      </div>
     `;
    bookTitle.value = '';
    bookAuthor.value = '';
  }
};

const bookRemove = document.querySelectorAll('#removeBtn');

bookRemove.forEach((button) => {
  button.addEventListener('click', () => {
    const dataSet = parseInt(button.dataset.id, 8);
    const buttonId = bookList.findIndex((object) => object.id === dataSet);
    const deleted = (index) => {
      bookList.splice(index, 1);
      bookUpload();
      localStorage.setItem('bookList', JSON.stringify(bookList));
    };
    deleted(buttonId);
  });
});

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
