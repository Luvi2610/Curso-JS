function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor. ^ é bit a bit, mas !! transforma em boolean
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador unario

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } //Não precisa do par chave valor
}

console.log(compras(true,true))
console.log(compras(false,true))
console.log(compras(true,false))
console.log(compras(false,false))