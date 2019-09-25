function teste(){

    var local = 'testando escopo'
    console.log(local)
}

teste()


let numero = 1

{
    let numero = 2
    console.log('escopo dentro', numero)
}
console.log('escopo fora', numero)

 
for (let i =0; i<10; i++){

    console.log('i=', i)
}

console.log('i=',i)