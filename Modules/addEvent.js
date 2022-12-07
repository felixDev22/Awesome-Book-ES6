const displayBooks = () => {
  document.getElementById('Book-list').classList.add('block');
  document.getElementById('Add-new').classList.remove('block');
  document.getElementById('contact').classList.remove('block');
};

const addNew = () => {
  document.getElementById('Add-new').classList.add('block');
  document.getElementById('Book-list').classList.remove('block');
  document.getElementById('contact').classList.remove('block');
};

const showContact = () => {
  document.getElementById('contact').classList.add('block');
  document.getElementById('Book-list').classList.remove('block');
  document.getElementById('Add-new').classList.remove('block');
};

export { displayBooks, addNew, showContact };
