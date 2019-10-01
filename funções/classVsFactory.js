class Pessoa {
    constructor(nome) {
        this.nome = nome
    }


    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p = new Pessoa('Matheus')
p.falar()


const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p1 = pessoa('Caio')

p1.falar()
