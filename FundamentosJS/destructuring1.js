//Novo recurso ES2015

const pessoa = {
    nome: 'Lucas',
    idade: 20,
    endereco: {
        rua: 'tal tal tal',
        numero: 123
    }
}

const { nome, idade } = pessoa //Tire do obbjeto pessoa o nome e a idade
console.log(nome,idade)

const { nome: n, idade: i} = pessoa //usar variávei com nome diferente
console.log(n,i)

const { formacao } = pessoa
console.log(formacao) //undefined

const { endereco: { rua,numero,cep }} = pessoa //Não criou variável endereço, apenas acessou
console.log(rua,numero,cep)