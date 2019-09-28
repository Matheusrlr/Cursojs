function pessoa(){
    this.idade = 0
    setInterval(function(){
        this.idade++
        console.log(this.idade)
     } ,1000)
    
}



function pessoa1(){
    this.idade = 0
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
     } ,1000)
    
}
new pessoa1