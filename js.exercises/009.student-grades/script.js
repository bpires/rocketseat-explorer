/* 
  Crie uma lista de estudantes , cada estudante dentro dessa lista, deverá conter os seguintes dados:
    - nome;
    - nota da primeira prova;
    - nota da segunda prova.

 Depois de criada a lista:

    Crie uma **função** que irá calcular a média das notas de cada aluno;
    Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
    
*/


const students = [
  {
    name: "Lisa",
    firstGrade: "10.0",
    secondGrade: "8.5",
  },
  {
    name: "Robert",
    firstGrade: "9.7",
    secondGrade: "6.2",
  },
  {
    name: "Kate",
    firstGrade: "3.9",
    secondGrade: "4.5",
  },
  {
    name: "Albert",
    firstGrade: "6.1",
    secondGrade: "8.8",
  },
  {
    name: "Kevin",
    firstGrade: "5.0",
    secondGrade: "7.2",
  },
]

function average(firstGrade, secondGrade) {
  return ((Number(firstGrade) + Number(secondGrade)) / 2).toFixed(1)
}

for (let student of students) {
  aver = average(student.firstGrade, student.secondGrade)
  console.log(aver)
  if (aver < 7) {
    alert(`${student.name}, sua média foi ${aver}!\nQue pena, não foi dessa vez.`)
  } else {
    alert(`${student.name}, sua média foi ${aver}!\nParabéns pela aprovação!`)
  }
}
