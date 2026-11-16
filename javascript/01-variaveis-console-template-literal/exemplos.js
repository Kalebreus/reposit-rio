// Execute na raiz do repositório:
// node javascript/01-variaveis-console-template-literal/exemplos.js

console.log("=== Variáveis e template literal ===");

const linguagem = "JavaScript";
let aulasConcluidas = 1;
aulasConcluidas = 2;

console.log(`Estou estudando ${linguagem}.`);
console.log(`Já concluí ${aulasConcluidas} aulas.`);
// linguagem = "Python"; // TypeError: const não permite reatribuição.

console.log("=== Escopo de módulo ===");

// No Node.js, esta variável pertence ao módulo (este arquivo).
const objetivo = "Aprender backend";

function mostrarObjetivo() {
  console.log(objetivo); // A função acessa o escopo externo.
}

mostrarObjetivo();

console.log("=== Escopos de função e de bloco ===");

function estudar() {
  const mensagem = "Iniciando o estudo";
  console.log(mensagem);

  if (true) {
    var assunto = "JavaScript"; // var não fica limitado ao if.
    let minutos = 30;
    const etapa = "variáveis";

    minutos = 45;
    console.log(`Estudando ${assunto}: ${etapa} por ${minutos} minutos.`);
  }

  console.log(assunto); // JavaScript: ainda estamos dentro da função.
  // console.log(minutos); // ReferenceError: fora do bloco.
  // console.log(etapa); // ReferenceError: fora do bloco.
}

estudar();
// console.log(mensagem); // ReferenceError: fora da função.
// console.log(assunto); // ReferenceError: var também respeita a função.

console.log("=== Objetos declarados com const ===");

const estudo = { assunto: "JavaScript", concluido: false };
estudo.concluido = true; // O conteúdo do objeto pode mudar.
console.log(`Exemplo concluído: ${estudo.concluido}`);
// estudo = {}; // TypeError: não é possível reatribuir a variável.

console.log("=== Texto em várias linhas ===");

console.log(`Resumo da aula:
- Variáveis
- Console
- Escopos
- Template literals`);
