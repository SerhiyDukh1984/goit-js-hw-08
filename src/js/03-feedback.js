import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const input = document.querySelector('input');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
input.addEventListener('input', throttle(onFormInput, 500));
textarea.addEventListener('input', throttle(onFormInput, 500));

isLocalStorageInfo();

function onFormInput() {
  const data = { email: input.value, message: textarea.value };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
}

function onFormSubmit(e) {
  e.preventDefault();

  localStorage.removeItem(LOCALSTORAGE_KEY);
  console.log({ email: input.value, message: textarea.value });
  form.reset();
}

function isLocalStorageInfo() {
  const savedInfo = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (savedInfo) {
    input.value = savedInfo.email;
    textarea.value = savedInfo.message;
  }
}
