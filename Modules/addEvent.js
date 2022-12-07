export const displayBooks = document.querySelector('.Book-ListBtn');
export const addNew = document.querySelector('.AddBook-Btn');
export const showContact = document.querySelector('.contact');

displayBooks.addEventListener('click', () => {
  document.getElementById('Book-list').classList.add('block');
  document.getElementById('Add-new').classList.remove('block');
  document.getElementById('contact').classList.remove('block');
});

addNew.addEventListener('click', () => {
  document.getElementById('Add-new').classList.add('block');
  document.getElementById('Book-list').classList.remove('block');
  document.getElementById('contact').classList.remove('block');
});

showContact.addEventListener('click', () => {
  document.getElementById('contact').classList.add('block');
  document.getElementById('Book-list').classList.remove('block');
  document.getElementById('Add-new').classList.remove('block');
});
