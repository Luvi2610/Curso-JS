function tratarErroELancar(erro) {
    //throw new Error('...')
    throw true
}

function imprimirNomeCaixaAlta(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final') //finally executa de qualquer jeito
    }
}

const obj = { nome: 'Lucas' }
imprimirNomeCaixaAlta(obj)