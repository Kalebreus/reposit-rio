# 01 — Variáveis, console e template literal

Anotações da aula sobre variáveis e escopos em JavaScript, com exemplos complementares de console e template literals.

## Declaração de variáveis

Variáveis permitem guardar valores para usar durante a execução do programa.

| Palavra-chave | Permite reatribuição? | Respeita escopo de bloco? |
| --- | --- | --- |
| `const` | Não | Sim |
| `let` | Sim | Sim |
| `var` | Sim | Não |

Use `const` por padrão e `let` quando precisar reatribuir um valor. Evite `var` em código novo; ele aparece aqui para comparar os escopos.

```js
const linguagem = "JavaScript";
let aulasConcluidas = 1;

aulasConcluidas = 2;

console.log(linguagem); // JavaScript
console.log(aulasConcluidas); // 2
```

`const` precisa receber um valor na declaração e impede reatribuição. Isso não torna objetos e arrays imutáveis:

```js
const estudo = { assunto: "JavaScript", concluido: false };

estudo.concluido = true; // Permitido: alteração de uma propriedade.
// estudo = {}; // TypeError: reatribuição de uma constante.
```

## Console

O console ajuda a acompanhar a execução do código e inspecionar valores. No Node.js, as mensagens normalmente aparecem no terminal.

```js
console.log("Iniciando os estudos.");
console.warn("Exemplo de aviso.");
console.error("Exemplo de mensagem de erro.");
```

`console.error()` exibe uma mensagem; essa chamada, sozinha, não lança uma exceção nem encerra o programa.

## Template literal

Template literals usam crases e permitem inserir valores ou expressões no texto com `${expressao}`.

```js
const assunto = "JavaScript";
const aulasConcluidas = 2;

console.log(`Estou estudando ${assunto}.`);
console.log(`Após a próxima aula, serão ${aulasConcluidas + 1} aulas.`);
```

Também permitem textos em várias linhas:

```js
console.log(`Resumo da aula:
- Variáveis
- Console
- Escopos
- Template literals`);
```

## Escopos

O escopo determina onde uma variável pode ser acessada.

### Global e módulo

Variáveis globais podem ser acessadas em diferentes partes do programa, respeitando as regras de escopo do ambiente.

No **Node.js**, declarar uma variável no topo de um arquivo não a torna global automaticamente: ela pertence ao módulo daquele arquivo. Para compartilhar valores entre arquivos, usamos exportação e importação.

```js
const objetivo = "Aprender backend"; // Escopo do módulo no Node.js.

function mostrarObjetivo() {
  console.log(objetivo); // A função acessa o escopo externo.
}

mostrarObjetivo();
```

### Função

Variáveis declaradas dentro de uma função não podem ser acessadas diretamente de fora dela. Isso vale para `var`, `let` e `const`; as duas últimas também respeitam blocos internos.

```js
function mostrarAssunto() {
  const assunto = "Backend";
  console.log(assunto);
}

mostrarAssunto();
// console.log(assunto); // ReferenceError: fora da função.
```

### Bloco

Blocos como os de `if` e loops delimitam o acesso às variáveis declaradas com `let` e `const`.

`var` não respeita esse limite, mas continua limitado à função ou ao módulo em que foi declarado.

```js
function estudar() {
  if (true) {
    var assunto = "JavaScript";
    let minutos = 30;
    const etapa = "variáveis";

    minutos = 45;
    console.log(`Estudando ${assunto}: ${etapa} por ${minutos} minutos.`);
  }

  console.log(assunto); // JavaScript: ainda dentro da função.
  // console.log(minutos); // ReferenceError: fora do bloco.
  // console.log(etapa); // ReferenceError: fora do bloco.
}

estudar();
// console.log(assunto); // ReferenceError: fora da função.
```

Nem todo par de chaves cria um escopo: em `{ assunto: "JavaScript" }`, por exemplo, as chaves representam um objeto.

## Executar os exemplos

Com o Node.js instalado, abra o terminal na raiz do repositório e execute:

```bash
node javascript/01-variaveis-console-template-literal/exemplos.js
```

O arquivo [exemplos.js](exemplos.js) reúne exemplos executáveis. As linhas que causariam erros estão comentadas para permitir a execução completa.

[Voltar ao índice](../../README.md)
