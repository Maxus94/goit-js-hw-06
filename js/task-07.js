// Напиши скрипт, який реагує на зміну значення 
// input#font-size-control (подія input) і змінює інлайн-стиль span#text, 
// оновлюючи властивість font-size. 
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputField = document.querySelector('#font-size-control');
const spanField = document.querySelector('#text');
 inputField.addEventListener("input", (event) => {        
    spanField.style.fontSize = `${event.currentTarget.value}px`
 })