/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */
const bookContainer = document.querySelector('.books-container');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const addBtn = document.querySelector('.add-btn');

let bookList = [];

class SingleBook {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class DisplayBook {
  static bookUpload() {
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
  }

  static deleted(index) {
    bookList.splice(index, 1);
    DisplayBook.bookUpload();
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }

  static addBook() {
    const books = new SingleBook(bookTitle.value, bookAuthor.value);
    bookList.push(books);
  }
}

window.onload = () => {
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

// add event listeners
function displayList() {
  document.getElementById('Book-list').classList.add('block');
  document.getElementById('Add-new').classList.remove('block');
  document.getElementById('contact').classList.remove('block');
}
function displayNew() {
  document.getElementById('Add-new').classList.add('block');
  document.getElementById('Book-list').classList.remove('block');
  document.getElementById('contact').classList.remove('block');
}
function displayContact() {
  document.getElementById('contact').classList.add('block');
  document.getElementById('Book-list').classList.remove('block');
  document.getElementById('Add-new').classList.remove('block');
}
