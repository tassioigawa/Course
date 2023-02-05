var nome, nota1, nota2;
nome = prompt("Digite o nome do aluno:")
nota1 = prompt("Digite a nota 1 do aluno:")
nota2 = prompt("Digite a nota 2 do aluno:")

// parse int converte para inteiro
media = (parseInt(nota1) + parseInt(nota2)) / 2

//Obs: Pode ser usado sem a chave somente nesse caso, quando somente tem uma unica linha
if(media >= 5){
    alert("Aprovado!" + nome)
}
else
    alert("Reprovado!" + nome)