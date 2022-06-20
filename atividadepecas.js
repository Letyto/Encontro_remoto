let pesoPecas = 100
let numeroPecas = 7
let nomePecas = "roda"

if (pesoPecas >= 100) {
    console.log("Peso suficiente, cadastro permitido.")
} else {
    console.log("Peso insuficiente, cadastro negado.")
}


 if (numeroPecas >= 10) {
     console.log("Quantidade de peças excedida, cadastro negado.")
 } else {
     console.log("Cadastro permitido.")
 }


 if (nomePecas.length < 3) {
     console.log("Cadastro negado, caracteres insuficientes.")
 } else {
     console.log("Cadastro permitido.")  
 }