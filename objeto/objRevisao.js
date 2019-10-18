const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220


delete produto['marca do produto']

delete produto.nome


const carro = {
    modelo : 'A4',
    valor: 8900,
    proprietatio:{
        nome: 'Pedro',
        idade: 25,
        endereco: {
        logradouro: 'Rua ABC',
        numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 19
    }]
}


console.log(carro)