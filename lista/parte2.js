// EXERCICIO 1
var pessoa = {
    nome : "neymar",
    idade : 18,

    apresentar : function(){
        console.log("Olá, meu nome é", pessoa.nome, "e tenho" ,pessoa.idade, "anos.");
        
    }   
} 

// EXERCICIO 2
console.log(pessoa.nome);


// EXERCICIO 3
pessoa.idade = 30
console.log(pessoa.idade);

// EXERCICIO 4
 var adicionando = "cidade"
 pessoa["adicionando"] = "vitoria"
 console.log(pessoa.nome, pessoa.idade, pessoa.adicionando);


 // EXERCICIO 5
pessoa.apresentar()


// EXERCICIO 6
var turma = [{nome : "arthur", nota : 10 }, {nome : "Armando", nota : 9}, {nome : "Armanda", nota : 8}]
for(var i = 0; i < turma.length; i++){
    console.log("o aluno" ,turma[i].nome, "tirou" ,turma[i].nota)
}
  



