// ATIVIDADE PRATICA DO DIA 01/02/2024 ----> Dupla Ludmila e Mariangele

let prompt = require ('prompt-sync')()


// Apresentando quais opções estão disponiveis para escolha

console.log("Serviços disponiveis:");
    
console.log(" 1 -> + : soma " +  
            " 2 -> - : subtração " + 
            " 3-> / : divisão " + 
            " 4 -> * : multiplicação "
            );
// Solicita ao usuario que informe o primeiro numero/valor que fara parte da operação

valor1 = parseInt(prompt("Digite 1º valor: "))  

//Então solicita a escolha de qual operação deseja que seja realisada

operacao = parseInt(prompt("Escolha a operação (+ - / * ): ")); 
    // Teste para evitar que seja adicionado um simbolo ao invés do numero que representa a operação.  Se for correto segue solicitando o segundo valor da operação. 

    if (!isNaN(operacao)){
    valor2 = parseInt(prompt("Digite 2º valor: "))
    } else {
            console.log("Você precisa escolher: 1 para soma (+) " +  
                                            " 2 para subtração (-) " + 
                                            " 3 para divisão (/)" + 
                                            " ou 4 para multiplicação (*)");
            } 
//Se não solicita que escolha novamente a operação desejada e se for correto ai então solicita o segundo valor
operacao = parseInt(prompt("Escolha a operação (+ - / * ): ")); 

valor2 = parseInt(prompt("Digite 2º valor: "))   

    // Apresentação do resultado da operação 
switch (operacao){
             
    case 1:    
            console.log(valor1 + valor2)
    break;
    }