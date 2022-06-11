/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

let num1 = prompt("Qual o primeiro número?")

let num2 = prompt("Qual o segundo número?")

num1 = Number(num1)
num2 = Number(num2)

const sum = num1 + num2
const sub = num1 - num2
const mult = num1 * num2
const div = num1 / num2
const restDiv = num1 % num2

alert('A soma resulta ' + sum)
alert('A subtração resulta ' + sub)
alert('A multiplicação resulta ' + mult)
alert('A divisão resulta ' + div)
alert('O resto da divisão é ' + restDiv)
