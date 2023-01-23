let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('Tudo verdadeiro')
console.log(!!' ')
console.log(!!3) //Qualquer inteiro exceto 0
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Tudo falso')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

let nome = 'Lucas'
//Valor padrão de variável
console.log(nome || 'Desconhecido')

nome = ''
console.log(nome || 'Desconhecido')