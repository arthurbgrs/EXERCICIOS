var senha = prompt("Digite sua senha: ");
if ((senha = "12345")) {
  console.log("sua senha esta correta, você entrou");
} else if(senha != "12345") {
  console.log("sua senha esta errada, tente denovo");
}
var saldo = "15000";

while("S"){
function operacoes(escolha) {
  var saque, deposito;
  switch (escolha) {
    case "1":
      let Saque = prompt("Quanto deseja sacar? ");
      var subtracao = Number(saldo) - Number(Saque);
      console.log("Agora você possui ", subtracao, " de saldo");
      break;

    case "2":
      let Deposito = prompt("Quanto deseja depositar? ");
      var soma = Number(Deposito) + Number(saldo);
      console.log("Agora você possui ", soma, " de saldo");
      break;
  }
}
var escolhaOperacao = prompt("Qual operação você deseja realizar 1 ou 2? ")

operacoes(escolhaOperacao);

var final = prompt("Você deseja realizar alguma outra operação? ")
switch (final){
  case "S" :
  break

  case "N" :
    console.log("Obrigado por usar o RS bank")
}
}