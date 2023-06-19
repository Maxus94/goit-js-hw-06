// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. 
// Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingrContainer = document.querySelector('#ingredients');

const listIngr = ingredients.map(ingredient => {
  const ingrEl = document.createElement('li');  
  ingrEl.textContent = ingredient;
  ingrEl.classList.add('item');
  return(ingrEl);
})

ingrContainer.append(...listIngr);