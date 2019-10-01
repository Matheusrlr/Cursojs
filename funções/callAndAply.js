function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1- this.desc) * (1 + imposto)}`

}

const produto = {
    nome: 'Notebook',
    preco: 3000,
    desc: 0.20,
    getPreco
}

global.preco = 20
global.desc = 0.1

const carro = { preco: 40000, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))


console.log(getPreco.call(carro, 0.15, '$'))
console.log(getPreco.apply(carro, [0.30, '$']))