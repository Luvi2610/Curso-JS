const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) //Não gera erro
console.log(escola.charCodeAt(3)) //Pega o valor na tabela ASCII
console.log(escola.indexOf('3')) 

console.log(escola.substring(1)) //Pega do 1 pra frente
console.log(escola.substring(0,3)) //Pega do 0 ao 3 sem incluir o 3

console.log('Escola '.concat(escola).concat("!")) //Pode usar método a partir do literal
console.log(escola.replace(3, 'e')) 

console.log('Ana,Maria,Pedro'.split(',')) //gera array de 3 elementos!