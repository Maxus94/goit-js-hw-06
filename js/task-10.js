function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input[type="number"]');
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const divToInsert = document.querySelector("#boxes");

let divArray =[];
let initialSize = 30;
function createBoxes(amount){
   for (let i = 0; i < amount; i++) {    
     let currentDiv = document.createElement("div");          
     currentDiv.style.width = `${initialSize}px`;
     currentDiv.style.height = `${initialSize}px`;
     currentDiv.style.backgroundColor = getRandomHexColor();
     divArray[i] = currentDiv;          
     initialSize += 10;
   }
   return;
}

createButton.addEventListener("click", (event) => {  
  initialSize = 30;
  divArray = [];
  createBoxes(inputNumber.value);
  divToInsert.append(...divArray);  
})

destroyButton.addEventListener("click", (event) => {
  divToInsert.innerHTML = '';  
})

