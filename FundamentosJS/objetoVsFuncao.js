console.log(typeof Object) //função
console.log(typeof new Object) //objeto (função instanciada)

const Cliente = function() {}
console.log(typeof Cliente) //função
console.log(typeof new Cliente) //objeto

class Produto {} //ES 2015 (ES6)
console.log(typeof Produto) //Função (classe é forma diferente de definir função)
console.log(typeof new Produto()) //objeto