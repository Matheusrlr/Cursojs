function tratarErro(erro){
    throw new Error('Um erro de declaração está ocorrendo')
}

function imprimirnome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErro(e)
    }
}
const obj = { name: 'Matheus' }

imprimirnome(obj)