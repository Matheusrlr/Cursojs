// Factory simples

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa('Carla'))


function criarProduto(nome, preco) {

    return {
        nome: nome,
        preco,
        desconto: 0.1
    }
}


console.log(criarProduto('carro', 10))
console.log(criarProduto('diamante', 100))