/* eslint-disable import/no-unresolved */
import './modules/addEvent.js';
import './modules/time.js';
import { DateTime } from './modules/luxon.js';
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
showDateAndTime.innerHTML = now.toLocaleString(
  DateTime.DATETIME_FULL_WITH_SECONDS
);
