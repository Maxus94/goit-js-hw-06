const categories = document.querySelectorAll(".item");
console.log('Number of categories: ', categories.length);
console.log('');  
categories.forEach((categorie, index) => {
  const subCatTitle = categorie.querySelector("h2");
  const subCat = categorie.querySelectorAll("li");
  console.log('Category: ', subCatTitle.textContent);  
  console.log('Elements: ', subCat.length);
  console.log(''); 
});