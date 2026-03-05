//Primitiva 
function primitiva(max){ 

let numero= Math.floor(Math.random() * max) + 1 

return numero 
} 

let numero= 0
let num1=[] 

while(num1.length < 6){ 

numero=primitiva(49) 

if(num1.indexOf(numero)>-1){ 
console.log("ya esta en la lista:" +numero) 

} 

else

num1.push(numero) 

}
console.log(num1) 
