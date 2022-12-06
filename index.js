/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */

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
