//Object.preventsExtensions (não permite adicionar)

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'

})

console.log('Extensível:', Object.isExtensible(produto))

produto.data = '28/10'
console.log(produto)

// Object.seal  (Não deixa adicionar nem excluir, porém pode alterar)
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)

console.log('Selado', Object.isSealed(pessoa))

// Object.freeze = selado + valores constantes

const id = {nome:'Pedro', idade: 30, cpf: 1145666}

Object.freeze(id)
id.nome = 'Carla'

console.log(id)