//Encontrar o Maior Número em um Array
//Crie uma função maiorNumero(arr) que receba um array de números e
//retorne o maior valor presente nesse array.

function maiorNumero(arr) {
    if (arr.length === 0) return "Array vazio";
    let maior = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i];
        }
    }
    return maior;
}

console.log(maiorNumero([10, 25, 3, 99, 7])); 
console.log(maiorNumero([-5, -10, -1, -20])); 
console.log(maiorNumero([])); 