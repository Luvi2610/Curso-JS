console.log(7 / 0) //Infinity
console.log("10"/2) //Dentro da string pode ter não só números
console.log("10" + 2) //Nesse caso a string tem preferência!! Irá concatenar
console.log("10" - 2) 
console.log("Show!"/2) //NaN
console.log(0.1 + 0.7) //Especificação IEEE que deixa passar imprecisões para ser mais rápido do que a 100% precisa
console.log((10.345).toFixed(2))
//console.log(10.345.toFixed(2)) //Não pode chamar função dentro de literal