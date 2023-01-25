//Acessar membros de função com notação ponto

console.log(typeof console) //object
console.log(Math.ceil(6.1)) //7

const obj1 = {}
obj1.nome = 'bola' //cria dinâmicamente o atributo nome dentro de obj1
console.log(obj1.nome) //bola

function Obj(nome) {
    this.nome = nome //receber o atributo nme por parâmetro e deixar público 
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
