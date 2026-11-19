// Execute na raiz do repositório:
// node javascript/04-loops/exemplos.js
// Os exemplos interativos com prompt() estão em navegador.html.

console.log("=== For: 0 a 5 (6 execuções) ===");

for (let i = 0; i <= 5; i++) {
  console.log(`Incrementando a variável i: ${i}`);
}

console.log("=== While: 0 a 9 (10 execuções) ===");

let a = 0;
const b = 10;

while (a < b) {
  console.log(`Incrementando a variável a: ${a}`);
  a++;
}

console.log("=== Do while: 0 a 5 (6 execuções) ===");

// O i declarado no cabeçalho do primeiro for pertence apenas àquele laço.
let i = 0;

do {
  console.log(`Incrementando a variável i: ${i}`);
  i++;
} while (i <= 5);

console.log("=== For com limite exclusivo: 0 a 9 (10 execuções) ===");

for (let i = 0; i < 10; i++) {
  console.log("Número:", i);
}

console.log("=== While com condição inicialmente falsa ===");

let contadorWhile = 10;

while (contadorWhile < 5) {
  console.log("Bloco do while:", contadorWhile);
  contadorWhile++;
}

console.log("O bloco do while não executou. Contador:", contadorWhile);

console.log("=== Do while com condição inicialmente falsa ===");

let contadorDoWhile = 10;

do {
  console.log("Bloco do do while:", contadorDoWhile);
  contadorDoWhile++;
} while (contadorDoWhile < 5);

console.log("O bloco do do while executou uma vez. Contador:", contadorDoWhile);
