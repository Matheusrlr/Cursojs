const pai = {nome: 'Pedro', corCabelo: 'Preto'}

const filha1 = Object.create(pai)

filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})
filha2.nome = 'Clara' // Não funciona por causa do writable
console.log(filha2.nome)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha1){
    filha1.hasOwnProperty(key)?
    console.log(key) : console.log(`Por herança: ${key}`)
}