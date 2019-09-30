let compara = function (param){
    console.log(this === param)
}

compara(global)

const obj = {}
compara = compara.bind(obj)
compara(obj)

let comparar = param => console.log(this === param )

comparar(global)
comparar(module.exports)

comparar = comparar.bind(obj)
comparar(obj)
comparar(module.exports)