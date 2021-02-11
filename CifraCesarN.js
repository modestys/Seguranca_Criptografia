const { format } = require('path');

let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let resultado = "";

let palavra = lines.shift();
let qtdPermutas = parseInt(lines.shift());

for(let i = 0; i < palavra.length; i++){
    if((palavra.charCodeAt(i) - qtdPermutas) < 65) {
        let r = 65 - (palavra.charCodeAt(i) - qtdPermutas);
        resultado += String.fromCharCode(91 - r);
    }else
        resultado += String.fromCharCode(palavra.charCodeAt(i) - qtdPermutas);
}

console.log(resultado);