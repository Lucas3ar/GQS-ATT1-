//Verificar Palíndromo
//Desenvolva uma função palindromo(str) que receba uma string e retorne
//true se a string for um palíndromo (lê-se da mesma forma de frente para
//trás), ou false caso contrário.
 
function palindromo(str) {
    
    str = str.replace(/\s+/g, '').toLowerCase();

    let reversedStr = str.split('').reverse().join('');
    
    return str === reversedStr;
}

console.log(palindromo("arara"));  
console.log(palindromo("madam"));  
console.log(palindromo("hello"));  
console.log(palindromo("A man a plan a canal Panama"));  
