/*  Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
підставляє його поточне значення в span#name-output. 

Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous". */

const inputTextEl = document.querySelector('#name-input');
const outputTextEl = document.querySelector('#name-output');

const titleValue = () => inputTextEl.value === "" ? outputTextEl.textContent = "Anonymous" : outputTextEl.textContent = inputTextEl.value;

inputTextEl.addEventListener('input', titleValue);