
let alfabeto= "abcdefghijklmnopqrstuvwxyz"; 

let frase="casa"; 

let paso=3; 

let fraseCifrada=""; 
for (let i=0; i<frase.length; i++){ 

console.log(frase[i]) 

let letraCifrada= alfabeto[(alfabeto.indexOf(frase[i])+paso)%26]; 

fraseCifrada += letraCifrada; 

} 

console.log(fraseCifrada); 

console.log(alfabeto[0]);  