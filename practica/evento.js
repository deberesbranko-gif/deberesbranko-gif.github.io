//variables
let num1=document.getElementById("numero1");
let num2=document.getElementById("numero2");
let boton=document.getElementById("run");
let salida=document.getElementById("salida");


//eventos
boton.addEventListener("click", (e) =>{
//console.log("me han pulsado:" + (parseInt(num1.value) + parseInt(num2.value)));

let texto="";

for (let i=0;i<num2.value;i++){
    texto+=num1.value + "<br>"
    salida.innerHTML=texto;
}

//salida.innerHTML=(parseInt(num1.value) + parseInt(num2.value));
})


//main

