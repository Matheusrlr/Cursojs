const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true}))

/* app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
}) */

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // Converter para JSON
})
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})
app.put('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.paramsnid,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})
app.listen (porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})