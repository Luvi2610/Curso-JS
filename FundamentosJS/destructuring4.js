function rand( [min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] //esquerda é destructuring e direita é novo array
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([500]))
console.log(rand([,10]))
console.log(rand([]))