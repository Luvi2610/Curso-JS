const NOME = 'Lucas' //contexto léxico 1

function apresentacao() {
    const NOME = 'Lucas' //contexto léxico 2
    console.log('Me chamo ' + NOME)
}

const cliente = {
    nome: 'Lucas',
    idade: 20,
    peso: 75,
    endereco: {
        rua: 'tal tal tal',
        numero: 123
    }
}
