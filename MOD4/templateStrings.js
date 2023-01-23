const nome = 'Lucas'
const concatenacao = 'Olá '+ nome + '!' //Não pode quebrar linha no meio da string
const template = `
    Olá
    ${nome}!`

console.log(concatenacao,template)

//expressões...
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`) //Pode usar função e chamada de método dentro do template string