const peso1 = 1.0 //considera como inteiro
const peso2 = Number('2.0') //Transforma string em number

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))

const P1 = 7.25
const P2 = 2.8

const total = P1 + P2
const media = total/2

console.log(media.toFixed(1)) //toFixed não altera o valor de média!!

console.log(typeof Number) //Função
console.log(typeof media) //tipo d dado