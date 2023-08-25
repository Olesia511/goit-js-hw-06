/*   Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
перевіряє його вміст щодо правильної кількості введених символів. 

-- Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
-- Якщо введена правильна кількість символів, то border інпуту стає зеленим, 
якщо неправильна кількість - червоним.

Для додавання стилів використовуй CSS-класи valid і invalid, 
які ми вже додали у вихідні файли завдання.   */

const inputTextRef = document.querySelector('input#validation-input');
const inputTextLengthDefault = Number(inputTextRef.getAttribute('data-length')); 


inputTextRef.addEventListener("blur", () => {
    const inputLength = inputTextRef.value.length;

    if (inputLength > 0 && inputLength !== inputTextLengthDefault) {
        inputTextRef.classList.add('invalid')
        inputTextRef.classList.remove('valid')
    }

    else if (inputLength === inputTextLengthDefault) {
        inputTextRef.classList.add('valid')
        inputTextRef.classList.remove('invalid')
    } 
        
    else {inputTextRef.classList = ''}
    });