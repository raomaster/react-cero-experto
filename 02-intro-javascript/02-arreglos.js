/*  Arreglos con js const arreglo = new Array(); */
const arreglo = [1, 2, 3, 4, 5];

const arreglo2 = [...arreglo, 5];

// map genera un nuevo arreglo
const arreglo3 = arreglo2.map((numero) => numero * 2);
console.log(arreglo, arreglo2, arreglo3);
