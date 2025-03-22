// Verificar se um Número é Primo
// Crie uma função numeroPrimo(num) que receba um número inteiro e
// retorne true se ele for primo, ou false caso contrário.

function numeroPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(numeroPrimo(7));  
console.log(numeroPrimo(10)); 
console.log(numeroPrimo(17)); 