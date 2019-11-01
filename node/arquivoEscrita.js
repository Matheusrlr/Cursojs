const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 30,
    desconto: 0.20
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})