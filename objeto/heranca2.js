// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // não é recomendado

const avo = {attr1: 'A'}

const pai = {__proto__: avo,attr2 : 'B'}

const filho = {__proto__: pai,attr3 : 'C'}
console.log(filho.attr1)

const carro = {
    velAtual : 0,
    velMax : 200,
    aceleraMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo : 'F40',
    velMax : '380' // Shadowing
}

const volvo = {
    modelo : 'V40',
    status () {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(140)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())