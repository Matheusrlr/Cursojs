const nums = [1,2,3,4,5]

resultado = nums.map(numero => numero*2)

console.log(resultado)

const soma10 = numero => numero + 10

const triplo = numero => numero *3
const paraDinheiro = numero => `R$ ${parseFloat(numero.toFixed(2).replace('.',','))}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)