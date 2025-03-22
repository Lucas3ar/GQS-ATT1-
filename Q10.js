// contrar a Média de um Array
// Escreva uma função mediaArray(arr) que receba um array de números e
// retorne a média dos valores

function mediaArray(arr) {
    let soma = 0;

    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }

    
    return soma / arr.length;
}

let numeros = [10, 20, 30, 40, 50];
let media = mediaArray(numeros);
console.log(media); 
