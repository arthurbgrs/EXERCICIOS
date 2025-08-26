// EXERCICIO 1
var carro = {}
    marca : "BMW",
    modelo = "SUV", 
    ano = 2020,

console.log(carro.ano, carro.marca, carro.modelo);

// EXERCICIO 2
console.log(carro.marca);
carro.ano = 2025
var novaPropriedade = "cor"
carro[novaPropriedade] = "amarelo"

// EXERCICIO 3
var pessoa = {
    nome : "Arthur",
    idade : 20,
    apresentar : function(){
        console.log("Meu nome é", pessoa.nome, "e tenho", pessoa.idade, "anos");
        
    }

        
    
}
pessoa.apresentar()
