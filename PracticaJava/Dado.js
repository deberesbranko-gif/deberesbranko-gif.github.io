function numeroAleatorio(max){
    let num = Math.floor(Math.random() * max) + 1;
    return num;
}

let num = numeroAleatorio(12);
console.log(num);
