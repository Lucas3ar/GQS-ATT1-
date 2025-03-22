// Contar Vogais em uma String
// Desenvolva uma função contarVogais(str) que conte e retorne o número de
// vogais (a, e, i, o, u) em uma string fornecida.

function contarVogais(str) {
    const vogais = "aeiouAEIOU";
    let contador = 0;

    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            contador++;
        }
    }
    return contador;
}

console.log(contarVogais("Olá Mundo")); 
console.log(contarVogais("JavaScript")); 
console.log(contarVogais("Programação")); 
