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

function dobro(numeros){
    return numeros * 2

    
}
console.log(dobro(30));



// EXERCICIO 4   

function soma(n1, n2){
   return n1 + n2
    
    
}
console.log( soma(5,8));
 


// EXERCICIO 5 
var numeros = [7, 8 ,3,4]
function media(numerox){
    var mediana = (numeros[0] + numeros[1] + numeros[2] + numeros[3]) / 4
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