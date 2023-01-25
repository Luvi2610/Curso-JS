//RUNTIME: Onde o JavaScript está sendo executado
//Frontend - Browser (assíncrono - chamar backend) Escopo global
//Backend - NodeJs Modularizado

//Browser
/*
window -> objeto global no browser
this === window é true

var a = "Texto" -> ESCOPO GLOBAL!!!
window.a mesmo que this.a 
var a = 123 -> Mudança ou redefinição é permitida!!!

let b = 123 -> CONTEXTO NÃO GLOBAL!!! AINDA SIM FOI DECLARADA NO ESCOPO GLOBAL, LOGO É VARIÁVEL GLOBAL!!!
window.b -> undefined
let b = 123 -> ERRO
this.b -> undefined
b -> 123

let pessoa = {nome: 'Ana', falar: function() {return `Eu sou ${this.nome}` }}
Nesse caso a palavra reservada this se refere ao contexto de pessoa!
*/

//NodeJs
let a = 3 //global

global.b = 123 //global equivale a window no browser
this.c = 456 //this é module.exports
this.d = false //this é module.exports
this.e = 'testando' //this é module.exports

console.log(this.a) //undefined
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando variável sem let e var
abc = 3 //escopo global
console.log(global.abc)