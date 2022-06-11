/*
  Capturar 2 números
  Verifique se a soma dos dois números é par
  Verifique se os dois números inseridos são iguais

*/

let num1 = prompt("Qual é o primeiro número?")

let num2 = prompt("Qual é o segundo número?")

num1 = Number(num1)
num2 = Number(num2)

const sum = num1 + num2

if ((sum % 2) == 0) {
  alert("A soma dos dois números é par.")
} else {
  alert("A soma dos dois números é ímpar.")
}

if (num1 == num2) {
  alert("Os números são iguais.")
} else {
  alert("Os números são diferentes.")
}


