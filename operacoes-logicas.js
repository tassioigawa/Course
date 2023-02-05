
var nome, nota1, nota2, passou;

passou = false;

nome = prompt("Digite o nome do aluno:")
nota1 = prompt("Digite a nota 1 do aluno:")
nota2 = prompt("Digite a nota 2 do aluno:")

// parse int converte para inteiro
media = (parseInt(nota1) + parseInt(nota2)) / 2

//Obs: Pode ser usado sem a chave somente nesse caso, quando somente tem uma unica linha
// && disjunção exclusiva - nesse caso abaixo, passou e média maior que 70 e media menor que 90
//|| disjunção - nesse caso ao lado, seria passou ou media maior que 70 (if(passou || media >= 70 )
if(media >= 50)
    passou = true;

if(passou && (media >= 70 && media <= 90))
    alert("Aprovado!" + nome)
else
    alert("Reprovado!" + nome)