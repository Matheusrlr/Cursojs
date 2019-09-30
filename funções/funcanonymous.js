const soma = function(x,y){
    return x + y
}

const result = function (a,b, operacao = soma){
    console.log(operacao(a,b))
}

result (3,7)

result (3,7, (c,d) => c*d)