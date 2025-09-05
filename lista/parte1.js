// EXERCICIO 1
var cores = ["Azul", "Amarelo","Vermelho" ]
console.log(cores);

// EXERCICIO 2
console.log(cores["0"]);

// EXERCICIO 3 
cores.push("Verde")
console.log(cores);

// EXERCICIO 4
cores["1"] = "Roxo"
console.log(cores);

// EXERCICIO 5
for(var i = 0 ; i < 4  ; i++){
    console.log(cores[i])
}

// EXERCICIO 6
for(var index in cores){
    console.log(cores[index]);
    
}

// EXERCICIO 7
var numeros = [2, 4 , 6 , 8, 10]
var soma = 0
for(var i = 0; i < numeros.length; i++){
 soma = soma + numeros[i]
//  soma += numeros[i]
 console.log(soma)
}
    

calcular()