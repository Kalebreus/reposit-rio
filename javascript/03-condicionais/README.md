# 03 — Condicionais: if, else e switch

Anotações e exemplos sobre decisões no código JavaScript. Este conteúdo pode ser consultado de forma independente das outras aulas do repositório.

## O que são condicionais?

São estruturas de controle de fluxo que definem qual caminho o programa deve seguir:

- Se uma condição for atendida, execute uma ação.
- Caso contrário, execute outra ação ou continue o programa.

Nesta aula, o foco está em `if`, `else if`, `else` e `switch`.

## If e else

`if` executa um bloco quando a condição é avaliada como verdadeira. O `else`, opcional, executa outro bloco quando ela é falsa.

```js
const idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```

O operador `>=` significa "maior ou igual". Para `idade = 18`, o primeiro bloco é executado.

## Else if

Use `else if` para testar outras condições quando as anteriores não forem atendidas.

```js
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
```

Nessa cadeia, somente o primeiro bloco cuja condição seja verdadeira é executado. A ordem das condições importa.

O operador `===` compara valor e tipo. Já `=` atribui um valor a uma variável.

## Switch

`switch` permite escolher uma ação comparando o resultado de uma expressão com valores específicos.

O mesmo exemplo dos filmes pode ser escrito assim:

```js
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
```

Neste trecho, `filme` é a variável definida no exemplo anterior desta página. O arquivo executável já reúne as declarações necessárias.

- `case` indica um valor a comparar.
- `break` encerra o `switch`, impedindo a execução das instruções dos próximos casos.
- `default` é opcional e trata a situação em que nenhum `case` corresponde. Colocá-lo no final facilita a leitura.

As comparações usam igualdade estrita, como `===`: o número `2` e a string `"2"` não correspondem ao mesmo `case`.

### Casos agrupados e ausência de break

Sem uma interrupção, a execução continua nas instruções dos próximos casos, mesmo sem uma nova correspondência. Esse comportamento é chamado de *fall-through*.

Podemos usar isso intencionalmente para agrupar casos:

```js
const dia = "sábado";

switch (dia) {
  case "sábado":
  case "domingo":
    console.log("É fim de semana.");
    break;
  default:
    console.log("É dia de semana.");
}
```

Neste exemplo, `dia` representa um nome de dia válido. Tanto `"sábado"` quanto `"domingo"` levam à mesma mensagem.

## Quando usar cada estrutura?

| Situação | Opção que costuma facilitar a leitura |
| --- | --- |
| Comparar intervalos, como `idade >= 18` | `if` / `else` |
| Combinar condições, como `idade >= 18 && temIngresso` | `if` / `else if` |
| Comparar uma mesma expressão com valores específicos, como nomes de filmes ou opções de menu | `switch` |

São orientações de legibilidade. Nos exemplos de filmes, as duas formas produzem a mesma decisão.

## Condições e conversão para booleano

Uma condição não precisa retornar literalmente `true` ou `false`: o JavaScript também pode converter o valor para booleano.

Valores como `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined` e `NaN` são avaliados como falsos (*falsy*). Strings não vazias, como `"false"` e `"0"`, são avaliadas como verdadeiras (*truthy*).

```js
const usuarioConectado = false;

if (usuarioConectado) {
  console.log("Usuário conectado.");
} else {
  console.log("Usuário desconectado.");
}
```

Prefira condições claras para evitar decisões inesperadas.

## Complemento do ZIP: operador ternário

O material disponibilizado contém a linha `condicao ? valorSeVerdadeiro : valorSeFalso` como modelo de sintaxe. Esses nomes não foram declarados no arquivo original, então executar a linha como está causa `ReferenceError`.

Um exemplo completo, para uma escolha simples entre dois valores, é:

```js
const idadeParaClassificar = 18;
const classificacao = idadeParaClassificar >= 18 ? "Maior de idade" : "Menor de idade";
console.log(classificacao);
```

Para decisões com vários passos, prefira blocos que mantenham o código fácil de ler.

## Executar e praticar

Com o Node.js instalado, execute na raiz do repositório:

```bash
node javascript/03-condicionais/exemplos.js
```

O arquivo [exemplos.js](exemplos.js) adapta os exemplos de filmes e idade do material e acrescenta os casos de `switch` estudados nesta aula.

Para praticar:

1. Altere `idade` para `17` e observe o caminho executado.
2. Troque `filme` por `"Harry Potter"` e depois por um título ausente dos casos.
3. No exemplo de igualdade estrita, troque `opcao` de `"2"` para `2`.
4. No `switch` dos filmes, remova temporariamente um `break` e observe a continuação do fluxo.

[Voltar ao índice](../../README.md)
