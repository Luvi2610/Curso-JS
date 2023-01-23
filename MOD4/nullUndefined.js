let valor //não inicializada
console.log(valor) //undefined
console.log(valor2) //its not defined(valor 2 não foi nem declarado)

//NULO => ATRIBUIÇÃO POR REFERÊNCIA!!!
valor = null //ausência de valor (não apnta para nenhum endereço de memória)
console.log(valor)

const produto = {}
console.log(produto.preco) //undefined

//EVITE ATRIBUIR UNDEFINED DE MANEIRA EXPLÍCITA!!