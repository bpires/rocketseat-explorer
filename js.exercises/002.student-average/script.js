/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/


let student = prompt("Qual é o nome do aluno?")

let grade1 = prompt ("Qual foi a primeira nota?")

let grade2 = prompt ("Qual foi a segunda nota?")

let grade3 = prompt ("Qual foi a terceira nota?")

grade1 = Number(grade1)
grade2 = Number(grade2)
grade3 = Number(grade3)

const average = (grade1 + grade2 + grade3) / 3

let result = average > 6

average.toFixed(1)

if (result) {
  alert ("Parabéns " + student + "! Você foi aprovado com média " + average + ".")
} else {
  alert ("Que pena " + student + "! Você foi reprovado com média " + average + ". Mais sorte da próxima vez!")
}
