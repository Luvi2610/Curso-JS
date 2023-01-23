//Sem retorno
function imprimirSoma(a,b) {
    console.log(a + b)
}

imprimirSoma(2,3) //5
imprimirSoma(2) //NaN
imprimirSoma(2,10,4,5) //12
imprimirSoma() //NaN

//FUncao com retorno
function soma(a,b = 1) { //b possui valor padrão!
    return a + b
}

console.log(soma(3,4))//7
console.log(soma(3))//4
console.log(soma())//NaN