/* Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

*/
// const students = [
//   { nome: "Alice",
//     nota1: 8,
//     nota2: 6 
//   },

//   { nome: "Bob"
//   , nota1: 7
//   , nota2: 9 
// },

//   { nome: "Carlos",
//    nota1: 5,
//    nota2: 5 
// },
// ]

// function calcularMedia(nota1, nota2) {
//   return (nota1 + nota2) / 2;
// }

// function verificarAprovacao(media) {
//   const mediaMinima = 7;
//   return media >= mediaMinima;
// }

// for (let i = 0; i < students.length; i++) {
//   const student = students[i];
//   const media = calcularMedia(student.nota1, student.nota2);
//   const aprovado = verificarAprovacao(media);

//   alert(`${student.nome} a sua média foi de: ${media.toFixed(1)} - ${aprovado ? "Aprovado" : "Reprovado"}`);
// }

let students = [
  {
    name: 'Ana',
    proofOne: 6.5,
    proofTwo: 8,
  },


  {
    name: 'Julia',
    proofOne: 7,
    proofTwo: 5,
  },

  {
    name: 'João',
    proofOne: 9,
    proofTwo: 7,
  },

  {
    name: 'Matheus',
    proofOne: 6,
    proofTwo: 5,
  },

]

function mediaCalc(students) {
  let media = (students.proofOne + students.proofTwo) / 2;
  return {
  name: students.name,
  media: media,
  }
  }
  
  let results = [];
  
  for (let student of students) {
  results.push(mediaCalc(student));
  }
  

  for (let result of results) {

  if(result.media >= 7) {
    alert(`A média do(a) ${result.name} é de ${result.media}: \n Parabéns, ${result.name}! Você foi aprovado(a) no concurso!`)
     } else {
     alert(`A média do(a) ${result.name} é de ${result.media}: \n Não foi dessa vez, ${result.name}! Tente novamente!`)
    }
}