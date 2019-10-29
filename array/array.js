console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('Bia', 'Carlos', 'Ana')

console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']

console.log(aprovados[1])

aprovados [3] = 'Paulo'

aprovados.push('Abia')

console.log(aprovados.length)

aprovados [9] = 'Ricardo'

console.log(aprovados[7] === undefined)

console.log(aprovados)
aprovados.sort()
aprovados.reverse()
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,1, 'João')
console.log(aprovados)