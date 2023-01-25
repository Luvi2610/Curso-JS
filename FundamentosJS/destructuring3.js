//Usando destructuring em funções

function rand({min = 0, max = 1000}) {//Destructuring
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

obj = {max: 10, min: 0}
console.log(rand(obj))