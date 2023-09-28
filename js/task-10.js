/* Напиши скрипт створення і очищення колекції елементів.

1- Користувач вводить кількість елементів в input і натискає кнопку Створити,
після чого рендериться колекція. 
Натисненням на кнопку Очистити, колекція елементів очищається.

2- Створи функцію createBoxes(amount), яка приймає один параметр - число.
Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.

Всі елементи повинні мати випадковий колір фону у форматі HEX.
Використовуй готову функцію getRandomHexColor для отримання кольору.

3- Створи функцію destroyBoxes(), яка очищає вміст div#boxes, 
у такий спосіб видаляючи всі створені елементи.  */

const boxesEl = document.querySelector("#boxes");
const controlsBtn = document.querySelector("#controls");
const inputEl = controlsBtn.children[0];
const createEl = controlsBtn.children[1];
const destroyEl = controlsBtn.children[2];
let currentSize = 20;

createEl.addEventListener("click", createBoxes);
destroyEl.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = Number(inputEl.value);

  let string = "";
  let size = 10;

  for (let i = 1; i <= amount; i += 1) {
    currentSize += size;
    string += `<div style="width: ${currentSize}px; height: ${currentSize}px; background-color:${getRandomHexColor()};"></div>`;
  }

  boxesEl.insertAdjacentHTML("beforeend", string);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
  inputEl.value = "";
  currentSize = 20;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
