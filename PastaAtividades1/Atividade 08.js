console.log("Calcule quanto você faz de dinheiro por mês! ");

let salarioMensal = parseFloat(prompt("Quanto você ganha por mês? "));
let horasMensais = parseFloat(prompt(" Quantas horas você trabalha num mês? "));

function horasTrabalhadas(salario, horas) {
return salario/ horas;

}

console.log("Seu salário por horas trabalhadas foi de:  R$ " + horasTrabalhadas(salarioMensal, horasMensais).toFixed(2));