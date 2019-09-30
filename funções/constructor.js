function Carro(velocidadeMaxima = 200, delta = 5){
    // atributo provado
    let velocidadeAtual = 0

    // método publico

    this.acelerar = function (){
        if (velocidadeAtual + delta <= 200){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }
    // metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350,20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())