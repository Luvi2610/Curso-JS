let num1 = 1
let num2 = 2

num1++ 
console.log(num1)
--num1 //A subtração tem precedência
console.log(num1)

console.log(++num1 === num2--) //true: ++ depois === depois --
console.log(num1 === num2) //false