const notas = [1.7,6.5,8.9,3.7,9.0,5.4]

// Sem callback
let notasBaixas = []

for (let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com callback

notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log('As notas abaixo de 7 são: ',notasBaixas2)