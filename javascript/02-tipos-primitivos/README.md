# 02 — Tipos primitivos

Tipos primitivos representam os valores mais básicos do JavaScript, como textos, números e valores lógicos.

## Tipos da aula

| Tipo | Representa | Exemplos |
| --- | --- | --- |
| `string` | Texto | `"Ricardo"`, `'JavaScript'` |
| `number` | Números inteiros ou decimais | `27`, `3.14` |
| `boolean` | Valor lógico | `true`, `false` |
| `undefined` | Valor não definido | Uma variável declarada sem valor inicial |
| `null` | Ausência de valor indicada explicitamente | `null` |

JavaScript possui **sete tipos primitivos**. Além desses cinco, existem `bigint` e `symbol`, apresentados brevemente mais abaixo.

## String

Representa texto e pode ser escrita com aspas simples, aspas duplas ou crases. Com crases, podemos usar os template literals estudados na aula anterior.

```js
const nome = "Ricardo Hofstetter Dias";
console.log(nome); // Ricardo Hofstetter Dias
```

## Number

Inteiros e decimais usam o mesmo tipo: `number`. Em JavaScript, o separador decimal é o ponto.

```js
const idade = 27;
const pi = 3.14;

console.log(idade); // 27
console.log(pi); // 3.14
```

## Boolean

Representa os valores `true` e `false`, sem aspas. É muito usado em condições.

```js
const userLoggedIn = true;

if (userLoggedIn) {
  console.log("Usuário está conectado.");
}
```

`"true"` é uma string; `true` é um booleano.

## Undefined

Uma variável declarada com `let`, sem valor inicial, recebe `undefined`:

```js
let idade;
console.log(idade); // undefined
```

A leitura de uma propriedade inexistente também retorna `undefined`:

```js
const pessoa = { nome: "João" };
console.log(pessoa.idade); // undefined
```

Nesse exemplo, `pessoa` é um **objeto**, não um valor primitivo. O valor de `pessoa.idade` é `undefined` porque essa propriedade não existe no objeto.

## Null

É um valor que podemos atribuir para indicar uma ausência intencional, como nenhum usuário selecionado.

```js
const usuarioSelecionado = null;
console.log(usuarioSelecionado); // null
```

Para esta aula, a diferença prática é: `undefined` aparece em situações como variáveis sem valor inicial e propriedades ausentes; `null` costuma ser atribuído explicitamente para representar ausência.

## Complemento: bigint e symbol

### Bigint

Representa números inteiros e permite trabalhar com valores além do limite de inteiros seguros de `number`. Um literal com o sufixo `n` tem o tipo `bigint`, mesmo quando o valor é pequeno.

```js
const bigNumber = 123456789n;
console.log(bigNumber); // 123456789n no Node.js
console.log(typeof bigNumber); // bigint
```

Não misture diretamente `bigint` e `number` em operações aritméticas:

```js
console.log(1n + 2n); // 3n
// console.log(1n + 2); // TypeError
```

### Symbol

Cria valores únicos que podem ser usados como identificadores.

```js
const primeiroId = Symbol("id");
const segundoId = Symbol("id");

console.log(primeiroId === segundoId); // false
```

## Conferindo os tipos com typeof

O operador `typeof` retorna uma string com o tipo do valor.

```js
console.log(typeof "JavaScript"); // string
console.log(typeof 27); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof 123456789n); // bigint
console.log(typeof Symbol("id")); // symbol
console.log(typeof null); // object
```

**Atenção:** `typeof null` retorna `"object"` por uma peculiaridade histórica da linguagem. Apesar desse resultado, `null` é um valor primitivo. Para verificar se um valor é `null`, use `valor === null`.

## Correções nos trechos da aula

- `console.log(idade)` antes de `let idade` causa `ReferenceError`; não é um exemplo de `undefined`. A declaração precisa ser executada antes do acesso. Esse período anterior à declaração é chamado de zona morta temporal.
- Para mostrar o valor de `pi`, use `console.log(pi)`. O trecho enviado usava `console.log(idade)` após declarar `pi`.
- Os trechos acima são exemplos independentes. No arquivo executável, a variável sem valor inicial se chama `valorNaoInformado` para não repetir a declaração de `idade`.

## Executar os exemplos

Com o Node.js instalado, abra o terminal na raiz do repositório e execute:

```bash
node javascript/02-tipos-primitivos/exemplos.js
```

O arquivo [exemplos.js](exemplos.js) reúne os exemplos. As linhas que causariam erros estão comentadas.

[Aula anterior](../01-variaveis-console-template-literal/README.md) · [Voltar ao índice](../../README.md)
