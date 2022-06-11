/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes e suas características
*/

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170,
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180,
  },
]

let patientsNames = []
let patientsAges = []
let patientsWeight = []
let patientsHeight = []

for(let patient of patients) {
  patientsNames.push(patient.name)
}

for(let patient of patients) {
  patientsAges.push(patient.age)
}

for(let patient of patients) {
  patientsWeight.push(patient.weight)
}

for(let patient of patients) {
  patientsHeight.push(patient.height)
}

for (i = 0; i < patients.length; i++) {
  alert(`${patientsNames[i]} tem ${patientsAges[i]} anos, ${patientsWeight[i]} quilos e ${patientsHeight[i]} cm de altura.`)
}
