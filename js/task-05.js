// Напиши скрипт, який під час набору тексту в інпуті 
// input#name-input (подія input), підставляє його 
// поточне значення в span#name-output. Якщо інпут порожній, 
// у спані повинен відображатися рядок "Anonymous".

const inputField = document.querySelector('#name-input');
const spanField = document.querySelector('#name-output');
inputField.addEventListener("input", (event) => {    
    if(event.currentTarget.value === ''){
        spanField.textContent = "Anonymous"
    } else{
        spanField.textContent = event.currentTarget.value
    }
})