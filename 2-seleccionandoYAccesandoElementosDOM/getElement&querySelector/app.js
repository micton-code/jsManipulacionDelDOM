//EJEMPLO para navegar desde PADRES hacia HIJOS 


//ACCEDER A ELEMENTO PADRE
const parent = document.getElementById("parent");
console.log(parent);


//ACCEDER A HIJOS DEL ELEMENTO PADRE
// const children = parent.children;
// console.log(children);


//ACCEDER A  PRIMER HIJO DEL ELEMENTO PADRE
// const firstChild = parent.firstElementChild;
// console.log(firstChild);


//ACCEDER A  ULTIMO HIJO DEL ELEMENTO PADRE
const lastChild = parent.lastElementChild;
console.log(lastChild);


//ACCEDER AL HERMANO PREVIO DEL ELEMENTO PADRE
// const previousSibling = parent.previousElementSibling;
// console.log(previousSibling);


//ACCEDER AL HERMANO SIGUIENTE DEL ELEMENTO PADRE
// const nextSibling = parent.nextElementSibling;
// console.log(nextSibling);






//LISTA DE ELEMENTOS PARA PODER NAVEGAR EN EL DOM
// children; // live HTMLCollection
// childNodes; // live NodeList
// firstChild; // live NodeList
// firstElementChild; // non-live HTMLCollection
// lastChild; // live NodeList
// lastElementChild; // non-live HTMLCollection
// previousSibling; // live NodeList
// previousElementSibling; // non-live HTMLCollection
// nextSibling; // live NodeList
// nextElementSibling; // non-live HTMLCollection







//EJEMPLO para navegar desde HIJOS hacia PADRES 



//const children2 = document.querySelector("li");
//console.log(children2);

//ACCEDER DE NUESTRO HIJO AL NODO PADRE
//const parent2 = children2.parentNode;
//console.log(parent2);

//ACCEDER DE NUESTRO HIJO AL ELEMENTO PADRE
//const grandParent = children2.parentElement;
//console.log(grandParent);

//ACCEDER DE NUESTRO HIJO AL ELEMENTO ABUELO
//const grandGrandParent = children2.closest("menu"); // este último es el más utilizado
//.closest("menu")--> el mas cercano con este nombre  
//console.log(grandGrandParent);


//LISTA DE EJEMPLOS PARA NAVEGAR DE LOS HIJOS HACIA LOS PADRES
// parentNode; // live NodeList
// parentElement; // non-live HTMLCollection
// closest(selector); // este último es el más utilizado