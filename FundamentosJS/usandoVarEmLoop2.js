const funcs = []

for (var i = 0;i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]() //10
funcs[8]() //10

//var tem escopo que perpassa o bloco em que o for foi definido, por isso o valor final é 10

