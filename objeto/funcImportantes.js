const pessoa = {
    nome : "Clara",
    idade : 23,
    peso : 45
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave,valor])=>{
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

console.log(pessoa.dataNascimento)

// Object.assign (ES 2015)

const dest = {a: 1}
const obj1 = {b: 2}
const obj2 = {c: 3, a:5}
const obj = Object.assign(dest, obj1, obj2)

Object.freeze(obj)
obj.c = 12
console.log(obj)

