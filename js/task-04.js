/*  Лічильник складається зі спану і кнопок, які по кліку
повинні збільшувати і зменшувати його значення на одиницю.

Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.   */

const buttonCounterEl = document.querySelector('#value');
const buttonDecrementEl = document.querySelector('[data-action="decrement"]');
const buttonIncrementEl = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const decrementCounter = () => buttonCounterEl.textContent = counterValue -= 1;
const incrementCounter = () => buttonCounterEl.textContent = counterValue += 1;

buttonDecrementEl.addEventListener("click", decrementCounter);
buttonIncrementEl.addEventListener("click", incrementCounter);
