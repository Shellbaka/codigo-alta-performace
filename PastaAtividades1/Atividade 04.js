
console.log("Vamos definir sua média. Insira suas Notas Bimestrais: "  );

let nota1 = prompt("Insira a nota do Semestre 1.1 ");
let nota2 = prompt("Insira a nota do Semestre 1.2 ");
let nota3 = prompt("Insira a nota do Semestre 2.1 ");
let nota4 = prompt("Insira a nota do Semestre 2.2 ");

somaSemestre1 = nota1 + nota2 / 2;
somaSemestre2 = nota3 + nota4 / 2;

mediaSemestre = somaSemestre1 + somaSemestre2 / 2;

console.log("A média do Aluno foi: " + mediaSemestre);