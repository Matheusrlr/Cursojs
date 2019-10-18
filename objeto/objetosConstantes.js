// pessoa -> endereço de memória -> {...} objeto
const pessoa = {nome : 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> outro endereço -> {...}
 //pessoa = {nome: 'Carlos'} 


 Object.freeze(pessoa)

 pessoa.nome = 'Maria'
 console.log(pessoa)
