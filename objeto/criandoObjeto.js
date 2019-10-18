// usando a notação literal

const obj = {quem:'Eu'}
console.log(obj)

// Object em JS
console.log(typeof Object , typeof new Object)
const obj1 = new Object
console.log(obj1)

// Funçoes contrutoras

function obj2(nome,idade,peso){
    this.nome = nome
    this.idade = idade
    this.peso = peso
}

console.log(new obj2('Matheus', 23, 72))

function obj3(nome,preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}

const p1 = new obj3 ('Caneta', 3, 0.5)

console.log(p1.getPrecoComDesconto())

// Função Factory

function criarFuncionário( nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30)*(30-faltas)
        }
    }
}

const f1 = criarFuncionário('Carlos', 8000, 13)

const f2 = criarFuncionário('Roberto', 5000, 15)

console.log(f1.getSalario(), f2.getSalario())

// Object.create

const filha = Object.create(null)
filha.nome = 'Sofia'
console.log(filha)

// retornar objeto a partir do JSON

const fromJSON = JSON.parse('{"info": "Sou um objeto"}')
console.log(fromJSON.info)