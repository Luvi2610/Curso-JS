const prod1 = {}
prod1.nome = 'Lucas' //chave - valor
prod1.endereco = 'rua f, 100'
prod1['numero'] = 11911111111

console.log(prod1)

const prod2 = {
    nome: 'Fulano',
    endereco:'rua tal',
    obj: {
        blabla: 1
    }
}

//JSON É FORMATO TEXTUAL!!! NÃO É A MESMA COISA QUE OBJETO!!!

'{"nome": "João","endereco": "rua tal tal tal"}'