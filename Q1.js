// Somar Elementos de um Array Escreva uma função somarArray(arr) que receba um array de números 
// e retorne a soma de todos os elementos:                                                       

function somarArray(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }
    return soma;
}

const resultado = somarArray([1, 2, 3, 4, 5]);
console.log("A soma dos elementos é:", resultado); 

