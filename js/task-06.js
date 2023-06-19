// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається 
// в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, 
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, 
// які ми вже додали у вихідні файли завдання.

const inputField = document.querySelector('#validation-input');
const numberOfSymbols = inputField.dataset.length;
inputField.addEventListener("blur", (event) => {            
    if(event.currentTarget.value.length === Number(numberOfSymbols)){
        if (inputField.classList.contains("invalid")){
            inputField.classList.remove("invalid");
        } 
        inputField.classList.add("valid");        
    } else {
        if (inputField.classList.contains("valid")){
            inputField.classList.remove("valid");
        }         
        inputField.classList.add("invalid");        
    }    
})
