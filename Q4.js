 
//Inverter uma String
//Escreva uma função inverterString(str) que receba uma string e retorne
//essa string invertida.
//Exemplo: inverterString('hello') deve retornar 'olleh'.

function inverterString(str) { 

    let invertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}

console.log(inverterString("hello"));
console.log(inverterString("javascript")); 
console.log(inverterString("mundo")); 