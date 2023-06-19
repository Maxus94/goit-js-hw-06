// Напиши скрипт, який змінює кольори фону елемента <body> 
// через інлайн-стиль по кліку на button.change-color 
// і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyCurrent = document.querySelector('body');
const buttonCurrent = document.querySelector('.change-color');
const spanCurrent = document.querySelector('.color');
buttonCurrent.addEventListener("click", (event) =>{
  bodyCurrent.style.backgroundColor = getRandomHexColor();
  spanCurrent.textContent = bodyCurrent.style.backgroundColor;
})
