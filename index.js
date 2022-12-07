/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */

import './modules/addEvent.js';
import './modules/time.js';
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
