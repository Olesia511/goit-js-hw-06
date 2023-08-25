/*  Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
і змінює інлайн-стиль span#text, оновлюючи властивість font-size. 

В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.   */

const inputSizeControlRef = document.querySelector('#font-size-control');
const textSizeControlRef = document.querySelector('#text');

textSizeControlRef.style.fontSize = `${inputSizeControlRef.value}px`;

inputSizeControlRef.addEventListener("input", () => {
    textSizeControlRef.style.fontSize = `${inputSizeControlRef.value}px`
});