// Execute na raiz do repositório:
// node javascript/02-tipos-primitivos/exemplos.js

console.log("=== String ===");

const nome = "Ricardo Hofstetter Dias";
console.log(nome);
console.log(typeof nome); // string

console.log("=== Number ===");

// A declaração deve ser executada antes de acessar a variável.
const idade = 27;
const pi = 3.14;
console.log(idade); // 27
console.log(pi); // 3.14
console.log(typeof idade); // number
console.log(typeof pi); // number

console.log("=== Boolean ===");

const userLoggedIn = true;
console.log(userLoggedIn); // true
console.log(typeof userLoggedIn); // boolean

if (userLoggedIn) {
  console.log("Usuário está conectado.");
}

console.log("=== Undefined ===");

let valorNaoInformado;
console.log(valorNaoInformado); // undefined
console.log(typeof valorNaoInformado); // undefined

const pessoa = { nome: "João" };
console.log(pessoa.idade); // undefined: propriedade inexistente.
// pessoa é um objeto; não é um valor primitivo.

console.log("=== Null ===");

const usuarioSelecionado = null;
console.log(usuarioSelecionado); // null
console.log(usuarioSelecionado === null); // true
console.log(typeof usuarioSelecionado); // object: peculiaridade histórica.
// null continua sendo um valor primitivo.

console.log("=== Complemento: Bigint ===");

const bigNumber = 123456789n;
console.log(bigNumber);
console.log(typeof bigNumber); // bigint
console.log(1n + 2n); // 3n
// console.log(1n + 2); // TypeError: bigint e number na mesma soma.

console.log("=== Complemento: Symbol ===");

const primeiroId = Symbol("id");
const segundoId = Symbol("id");
console.log(typeof primeiroId); // symbol
console.log(primeiroId === segundoId); // false: cada symbol é único.

console.log("=== Acesso antes da declaração ===");

// console.log(proximaAula); // ReferenceError: zona morta temporal.
let proximaAula;
console.log(proximaAula); // undefined: declaração já executada.
