var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let palavra = lines.shift();
let final = "";

for(let i = 0; i < palavra.length; i++){
    if(palavra.charAt(i) == ' ')
      final += " ";
    else if(palavra.charAt(i) =='a')
      final += "11 ";
    else if(palavra.charAt(i) == 'b')
        final += "12 ";
    else if(palavra.charAt(i) == 'c')
      final += "13 ";
    else if(palavra.charAt(i) == 'd')
      final += "14 ";
    else if(palavra.charAt(i) == 'e')
     final += "15 ";
    else if(palavra.charAt(i) == 'f')
     final += "21 ";
    else if(palavra.charAt(i) == 'g')
      final += "22 ";
    else if(palavra.charAt(i) == 'h')
      final += "23 ";
    else if(palavra.charAt(i) == 'i')
     final += "24 ";
    else if(palavra.charAt(i) == 'j')
      final += "25 ";
    else if(palavra.charAt(i) == 'k' || palavra.charAt(i)=='q')
      final += "31 ";
    else if(palavra.charAt(i) == 'l')
      final += "32 ";
    else if(palavra.charAt(i) == 'm')
      final += "33 ";
    else if(palavra.charAt(i) == 'n')
     final += "34 ";
    else if(palavra.charAt(i) == 'o')
      final += "35 ";
    else if(palavra.charAt(i) == 'p')
     final += "41 ";
    else if(palavra.charAt(i) == 'r')
      final += "42 ";
    else if(palavra.charAt(i) == 's')
      final += "43 ";
    else if(palavra.charAt(i) == 't')
      final += "44 ";
    else if(palavra.charAt(i) == 'u')
      final += "45 ";
    else if(palavra.charAt(i) == 'v')
      final += "51 ";
    else if(palavra.charAt(i) == 'w')
      final += "52 ";
    else if(palavra.charAt(i) == 'x')
      final += "53 ";
    else if(palavra.charAt(i) == 'y')
      final += "54 ";
    else if(palavra.charAt(i) == 'z')
      final += "55 ";
}
console.log(final);