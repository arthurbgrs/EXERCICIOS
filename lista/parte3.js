// EXERCICIO 1
function boasVindas(){
    console.log("Bem-vindo(a) ao curso de JavaScript!");
    
}
boasVindas()


// EXERCICIO 2
var nome = "Arthur"
function saudar(nomes){
    console.log("Olá", nome);

    
}
saudar()


// EXERCICIO 3
var numero = 20
function dobro(numeros){
    var dobra = numero * 2
    console.log(dobra);
    
}
dobro()


// EXERCICIO 4
var numero1 = 60
var numero2 = 30
function soma(n1, n2){
    var soma = numero1 + numero2
    console.log(soma);
    
}
soma()


// EXERCICIO 5 
var numeros = [7, 8 ,3,4]
function media(numerox){
    var mediana = (7 + 8 + 3 + 4) / 4
    console.log(mediana);
    
}
media()


// EXERCICIO 6
var pessoa = {
    nome : "neymar",
    idade : 18,
    descricaoPessoa : function(){
        console.log(pessoa.nome ,"e tenho", pessoa.idade, "anos");
        
    }
}
pessoa.descricaoPessoa()


// EXERCICIO 7
var calculadora ={
    numeros1 : 24, 
    numeros2 : 2,
    multiplicar : function(n1, n2){
        var multiplicacao = n1 * n2
        console.log(multiplicacao);
        
    }
}
calculadora.multiplicar(calculadora.numeros1 , calculadora.numeros2)