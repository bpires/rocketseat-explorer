/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
  
  IMC = peso / (altura²)  

*/


const patients = [
  {
    name: "Luiz",
    weight: 100,
    height: 190,
  },
  {
    name: "Alexandra",
    weight: 70,
    height: 170,
  },
  {
    name: "Carlos",
    weight: 90,
    height: 180,
  },
]

function IMC(weight, height) {
  return (weight / ((height / 100 ) ** 2)).toFixed(2)
}

for (i = 0; i < patients.length; i++) {
  alert(`${patients[i].name} possui o IMC de ${IMC(patients[i].weight,patients[i].height)}.`)
}

// function IMC(weight, height) {
//   return (weight / ((height / 100) ** 2)).toFixed(2)
// }

// function printPatientIMC(patient) {
//   return `
//     Paciente ${patient.name} possui o IMC de
//     ${IMC(patient.weight, patient.height)}
//   `
// }

// for (let patient of patients) {
//   let IMCmessage = printPatientIMC(patient)
//   alert(IMCmessage)
// }