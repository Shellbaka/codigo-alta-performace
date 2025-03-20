console.log("vamos definir a área do círculo, para isso vamo definir o raio. ");

let raio = parseFloat(prompt("Defina o valor do raio: "));

let Raio = raio*raio;

let pi = 3.14;


function areaCirculo(pi, Raio){
return pi * Raio;

}

console.log("A área do círculo é equivalente a:" + areaCirculo(pi, Raio).toFixed(2));



/* código alternativo para o uso no node com a biblioteca do : npm install readline-sync


const readline = require('readline-sync');

console.log("Vamos definir a área do círculo, para isso vamos definir o raio.");

let raio = parseFloat(readline.question("Defina o valor do raio: ")); // Lendo entrada do usuário
let pi = 3.14;

function areaCirculo(pi, raio) {
    return pi * (raio * raio);
}

//console.log("A área do círculo é equivalente a: " + areaCirculo(pi, raio).toFixed(2));
*/




/* OUTRO CÓDIGO ALTERNATIVO DESSA VEZ SEM PRECISAR DE INSTALAR NADA, PORÉM É MAIS COMPLEXO. 


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Vamos definir a área do círculo, para isso vamos definir o raio.");

rl.question("Defina o valor do raio: ", (raio) => {
    raio = parseFloat(raio);
    let pi = 3.14;

    function areaCirculo(pi, raio) {
        return pi * (raio * raio);
    }

    console.log("A área do círculo é equivalente a: " + areaCirculo(pi, raio).toFixed(2));

    rl.close(); // Fecha a interface de leitura
});



*/