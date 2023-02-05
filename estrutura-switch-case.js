function acaoBotao(params){
    var valor1, valor2, resultado, operacao
    valor1 = prompt("Digite primeiro valor: ")
    operacao = prompt("Digite a operação:  Ex: + , - , * , /")
    valor2 = prompt("Digite segundo valor: ")
    
    switch (operacao) {
        case "+":
            resultado = parseInt(valor1) + parseInt(valor2)
            break;
        case "-":
            resultado = parseInt(valor1) - parseInt(valor2)
            break;
        case "*":
            resultado = parseInt(valor1) * parseInt(valor2)
            break;
        case "/":
            resultado = parseInt(valor1) / parseInt(valor2)
            break;
            
    }
    document.getElementById("paragrafo").innerText = resultado
}
