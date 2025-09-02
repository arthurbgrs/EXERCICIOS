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
var alunos = ["Arthur", "Armando", "João"]
var notas = [10,8,9]
console.log("o aluno", alunos[0], "tirou", notas[0]);
console.log("o aluno", alunos[1], "tirou", notas[1]);
console.log("o aluno", alunos[2], "tirou", notas[2]);

