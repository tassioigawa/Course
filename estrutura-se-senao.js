

function acaoBotao(params){
    var valor1, valor2, resultado, operacao
    valor1 = prompt("Digite primeiro valor: ")
    operacao = prompt("Digite a operação:  Ex: + , - , * , /")
    valor2 = prompt("Digite segundo valor: ")
    
    if (operacao == "+"){
        resultado = parseInt(valor1) + parseInt(valor2)
    }
    else if(operacao == "-"){
        resultado = parseInt(valor1) - parseInt(valor2)
    }
    if (operacao == "*"){
        resultado = parseInt(valor1) * parseInt(valor2)
    }
    else if(operacao == "/"){
        resultado = parseInt(valor1) / parseInt(valor2)
    }
    
    document.getElementById("paragrafo").innerText = resultado
}
