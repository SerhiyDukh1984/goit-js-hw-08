import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const input = document.querySelector('input');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

isLocalStorageInfo();

const formData = {};

function onFormInput(e) {
  const value = e.target.value;
  formData[e.target.name] = value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  localStorage.removeItem('feedback-form-state');

  form.reset();

  console.log(formData);
}

function isLocalStorageInfo() {
  const savedInfo = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (savedInfo) {
    input.value = savedInfo.email;
    textarea.value = savedInfo.message;
    console.log(savedInfo);
  }
}
