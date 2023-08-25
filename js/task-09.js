/*  Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color. 
  
  Для генерування випадкового кольору використовуй функцію getRandomHexColor.  */


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector('body');
const btnColor = document.querySelector('.change-color');
const textSpan = document.querySelector('.color');


btnColor.addEventListener('click', changeColor);

function changeColor() {
  const color = getRandomHexColor();

  textSpan.textContent = color;
  bodyColor.style.backgroundColor = color;
}
