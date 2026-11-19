// Execute na raiz do repositório:
// node javascript/03-condicionais/exemplos.js
// Arquivo independente: não precisa carregar os exemplos de outras aulas.

console.log("=== If e else: idade ===");

const idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

console.log("=== If, else if e else: filmes ===");

const filme = "Homem aranha";

if (filme === "Harry Potter") {
  console.log("É o filme do Harry Potter.");
} else if (filme === "Star wars") {
  console.log("É o filme do Star wars.");
} else if (filme === "Homem aranha") {
  console.log("É o filme do Homem aranha.");
} else {
  console.log("É qualquer outro filme.");
}

console.log("=== Switch: a mesma decisão sobre filmes ===");

switch (filme) {
  case "Harry Potter":
    console.log("É o filme do Harry Potter.");
    break;
  case "Star wars":
    console.log("É o filme do Star wars.");
    break;
  case "Homem aranha":
    console.log("É o filme do Homem aranha.");
    break;
  default:
    console.log("É qualquer outro filme.");
}

console.log("=== Switch: casos agrupados ===");

const dia = "sábado";

switch (dia) {
  case "sábado":
  case "domingo":
    // Agrupamento intencional: ambos executam esta mensagem.
    console.log("É fim de semana.");
    break;
  default:
    console.log("É dia de semana.");
}

console.log("=== Switch: igualdade estrita ===");

const opcao = "2"; // String. Troque por 2 para comparar o resultado.

switch (opcao) {
  case 2:
    console.log("A opção é o número 2.");
    break;
  default:
    console.log("A opção não corresponde ao número 2: valor e tipo importam.");
}

console.log("=== Condição com booleano ===");

const usuarioConectado = false;

if (usuarioConectado) {
  console.log("Usuário conectado.");
} else {
  console.log("Usuário desconectado.");
}

console.log("=== Cuidado: string não vazia ===");

const texto = "false";

if (texto) {
  console.log('A string "false" é truthy: não é o booleano false.');
}

console.log("=== Complemento: operador ternário ===");

// No ZIP, os nomes da linha de sintaxe não estavam declarados.
// Aqui usamos uma condição e valores definidos para executar o exemplo.
const classificacao = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(classificacao);
