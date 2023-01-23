const funcs = []

for (let i = 0;i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]() //2
funcs[8]() //8

//let tem escopo de bloco, logo ocorre closure (o valor no momento em que a função é definida é lembrado)

