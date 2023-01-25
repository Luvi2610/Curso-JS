//resultavo VERDADEIRO ou FALSO

console.log('01)','1' == 1) //true (apenas valor)
console.log('02)','1' === 1) //false (valor e tipo)
console.log('03)','3' != 3) //false (apenas valor)
console.log('04)','3' !== 3) //true (valor igual tipo diferente)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)',d1 === d2)
console.log('10)',d1 == d2)
console.log('11)',d1.getTime() == d2.getTime())
console.log(d1)

console.log('12)',undefined == null)
console.log('13)',undefined === null)
