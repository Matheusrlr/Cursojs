const alunos = [ 
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Carlos', nota: 8.7, bolsista: true}
]

// Todos são bolsistas?

const todosBolsistas = (resultado,bolsista) => resultado && bolsista 
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Algum aluno é bolsista?

const algumBolsistas = (resultado,bolsistas) => resultado || bolsistas
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas))
