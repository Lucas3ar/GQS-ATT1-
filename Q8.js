// Ordenar um Array em Ordem Crescente
// Escreva uma função ordenarArray(arr) que receba um array de números e
// o retorne ordenado em ordem crescente.

function ordenarArray(arr) {
    return arr.sort((a, b) => a - b);
}

let numeros = [5, 3, 8, 1, 4];
let ordenado = ordenarArray(numeros);
console.log(ordenado); 

