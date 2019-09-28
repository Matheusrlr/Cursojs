const nome = 'Matheus'

const concatenacao = 'Olá ' + nome  + '!'

const template = `
    Olá
    ${nome}!
`

console.log(concatenacao, template)
console.log(`1+1 ${1+1}`)

let uc = string => string.toUpperCase()

console.log(uc('Testando o texto'))