import { DateTime } from './luxon.js';

const showDateAndTime = document.querySelector('#date');

showDateAndTime.innerHTML = DateTime.now().toLocaleString(DateTime.DAYTIME_MED);
