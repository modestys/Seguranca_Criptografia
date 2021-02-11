const { format } = require('path');

let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let resultado = "";

let palavra = lines.shift();

for(let i = 0; i < palavra.length; i++){
    if((palavra.charCodeAt(i) - 3) < 65) {
        let r = 65 - (palavra.charCodeAt(i) - 3);
        resultado += String.fromCharCode(91 - r);
    }else
        resultado += String.fromCharCode(palavra.charCodeAt(i) - 3);
}

console.log(resultado);

/*
let palavra = "A";
console.log(palavra.charCodeAt()) -> 65
var res = String.fromCharCode(69); 
console.log(res); -> E
*/