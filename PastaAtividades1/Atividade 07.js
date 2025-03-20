console.log("Este é um código base para podermos definir a área do quadrado. Vamos começar: ");

let base = parseFloat(prompt("insira a base: "))
let altura = parseFloat(prompt("Insira a altura: "))


function areaQuadrado(base, altura) {
return base * altura;

} 

console.log("A área do quadrado 2D é igual a: " + (areaQuadrado(base,altura)*2).toFixed(2));