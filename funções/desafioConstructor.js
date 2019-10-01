function Pessoa(nome) {
    this.nome = nome


    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p = new Pessoa('Matheus')
p.falar()
