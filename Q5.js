//Encontrar o Fatorial de um Número
//Implemente uma função fatorial(n) que calcule o fatorial de um número
//inteiro positivo.

function fatorial(n) {
    if (n < 0) return "Número inválido";
    if (n === 0 || n === 1) return 1;

    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// Exemplos de uso
console.log(fatorial(5));  // Saída: 120
console.log(fatorial(0));  // Saída: 1
console.log(fatorial(7));  // Saída: 5040
console.log(fatorial(-3)); // Saída: "Número inválido"
