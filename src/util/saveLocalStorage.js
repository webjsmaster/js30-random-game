import { localItem } from './variables.js';

function getDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const time = today.toLocaleTimeString('ru-RU');
  return `${mm}/${dd}/${yyyy} - ${time}`;
}

export function saveLocalStorage({ dateToday = getDate(), score, time }) {
  const resObj = {
    dateToday,
    score,
    time,
  };
  if (localStorage.getItem(localItem)) {
    const result = JSON.parse(localStorage.getItem(localItem));
    if (result.length > 9) {
      result.shift();
    }
    const writeObj = [...result, resObj];
    localStorage.setItem(localItem, JSON.stringify(writeObj));
  } else {
    localStorage.setItem(localItem, JSON.stringify([resObj]));
  }
}
