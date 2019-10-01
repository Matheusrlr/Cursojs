// Clousure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas a função

// Contexto léxico em ação!

const x = 'global'

function teste (){
    console.log(x)
}

function fora (){
    const x = 'local'
    function dentro (){
        return x
    }
    teste()
    return dentro
   
}

const func = fora()
console.log(func())

fora ()