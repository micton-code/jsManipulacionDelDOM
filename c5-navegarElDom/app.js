// EJ 01: Navegar hacia los elementos hijos
//const padre = document.getElementById('parent');
//console.log(padre);

//const hijos = padre.children;
//console.log(hijos);

    // Hacia el primer hijo
    //const primerHijo = padre.firstElementChild;
    //console.log(primerHijo);

    // Hacia el último hijo
    //const lastChild = padre.lastElementChild;
    //console.log(lastChild);

    // Navegar hacia el hermano anterior
    //const previousSibling = padre.previousElementSibling;
    //console.log(previousSibling);

    // Hacia el siguiente hermano
    //const nextSibling = padre.nextElementSibling;
    //console.log(nextSibling);



    // Lista de métodos para navegar por el DOM (de padre a hijos):

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


//EJ 02: Navegar de los elementos hijos a sus padres
const niños = document.querySelector('li');
console.log(niños);

    //EJ 02.1: Hacia el padre
    const padre2 = niños.parentNode;
    console.log('EJ 02.1 - Padre:', padre2);

    // EJ 02.2: Hacia
    const padre2b = niños.parentElement;
    console.log('EJ 02.2 - Padre:', padre2b);

    // EJ 02.3: Hacia el elemento más cercano que cumpla con el selector
    const elementoCercano = niños.closest("menu"); // este último es el más utilizado
    console.log(elementoCercano);

// parentNode; // live NodeList
// parentElement; // non-live HTMLCollection
// closest(selector); // este último es el más utilizado

