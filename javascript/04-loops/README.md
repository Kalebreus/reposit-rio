# 04 — Loops: for, while e do while

Anotações e exemplos sobre laços de repetição em JavaScript. Esta aula reúne seu próprio material para consulta e prática.

## O que são loops?

Loops permitem executar a mesma ação várias vezes, sem escrever repetidamente o mesmo comando. A repetição continua enquanto a condição do laço for avaliada como verdadeira.

Nesta aula, estudamos `for`, `while` e `do...while`.

## For

O `for` reúne a inicialização, a condição e a atualização do contador no cabeçalho:

```js
for (let i = 0; i <= 5; i++) {
  console.log(`Incrementando a variável i: ${i}`);
}
```

O fluxo desse exemplo é:

1. `let i = 0` inicializa o contador uma vez.
2. `i <= 5` é verificado antes de cada execução do bloco.
3. Se a condição for verdadeira, o bloco exibe o valor atual de `i`.
4. `i++` incrementa o contador em uma unidade após o bloco.
5. A condição é verificada novamente.

São **6 execuções**, exibindo os valores de `0` a `5`. Quando `i` chega a `6`, a condição se torna falsa e o laço termina.

O `for` costuma facilitar a leitura quando usamos um contador com limites definidos.

## While

O `while` verifica a condição antes de executar o bloco. Se ela for falsa desde o início, o bloco não executa nenhuma vez.

```js
let a = 0;
const b = 10;

while (a < b) {
  console.log(`Incrementando a variável a: ${a}`);
  a++;
}
```

Esse exemplo executa **10 vezes**, exibindo `0` a `9`. O incremento faz `a` chegar a `10`, encerrando o laço. Usamos `const` em `b` porque seu valor não é reatribuído.

O `while` costuma ser útil quando a repetição depende de uma condição e não sabemos antecipadamente quantas vezes será necessário executar o bloco.

## Do while

O `do...while` executa o bloco primeiro e verifica a condição depois. Por isso, o bloco executa **pelo menos uma vez**.

```js
let i = 0;

do {
  console.log(`Incrementando a variável i: ${i}`);
  i++;
} while (i <= 5);
```

Esse exemplo executa **6 vezes**, exibindo `0` a `5`. Observe o ponto e vírgula ao final de `while (i <= 5);`.

## Comparando as estruturas

| Estrutura | Quando verifica a condição? | Quantidade mínima de execuções do bloco |
| --- | --- | ---: |
| `for` | Antes do bloco | 0 |
| `while` | Antes do bloco | 0 |
| `do...while` | Depois do bloco | 1 |

Por exemplo, se o contador começa em `10` e a condição é `contador < 5`, um `while` não executa o bloco. Um `do...while` executa uma vez antes de verificar essa condição.

## Cuidado com os limites e o incremento

Os operadores `<` e `<=` mudam a quantidade de repetições:

```js
for (let i = 0; i < 10; i++) {
  console.log("Número:", i);
}
```

Esse laço exibe `0` a `9`: **10 números**. Se a condição fosse `i <= 10`, exibiria `0` a `10`: **11 números**.

Se a condição continuar verdadeira para sempre, o laço pode se tornar infinito. No exemplo de `while`, esquecer `a++` mantém `a` em `0` e impede o término da repetição.

Os trechos desta página são exemplos separados. Um `let i` declarado no cabeçalho do `for` fica limitado ao laço. Evite repetir uma declaração com `let` no mesmo escopo; o arquivo executável já organiza os contadores corretamente.

## Entradas com prompt no navegador

`prompt()` está disponível em páginas no navegador. Ele retorna uma **string** quando confirmamos a entrada, ou **`null`** ao clicar em Cancelar. Por isso, comparamos a opção de saída com `"0"`, e não com o número `0`.

O Node.js não oferece `prompt()` por padrão. Os exemplos interativos desta aula estão em um arquivo HTML próprio.

### While: repetir até digitar sair

```js
let entrada;

while (entrada !== "sair" && entrada !== null) {
  entrada = prompt("Digite algo (ou 'sair' para encerrar):");

  if (entrada !== null) {
    console.log("Você digitou:", entrada);
  }
}
```

O teste inicial permite a primeira entrada, pois `entrada` começa como `undefined`. O laço termina ao digitar exatamente `sair` ou ao cancelar.

### Do while: pedir uma opção pelo menos uma vez

```js
let opcao;

do {
  opcao = prompt("Escolha uma opção (1, 2, 3 ou 0 para sair):");

  if (opcao !== null) {
    console.log("Opção escolhida:", opcao);
  }
} while (opcao !== "0" && opcao !== null);
```

O pedido de opção ocorre antes da verificação. O laço termina ao digitar exatamente `0` ou ao cancelar.

Nos trechos enviados na aula, Cancelar não encerrava os laços, porque `null` é diferente de `"sair"` e de `"0"`. Os exemplos aqui acrescentam essa saída. As entradas são comparadas como foram digitadas, incluindo maiúsculas e espaços.

## Executar os exemplos

### No Node.js

Com o Node.js instalado, execute na raiz do repositório:

```bash
node javascript/04-loops/exemplos.js
```

O arquivo [exemplos.js](exemplos.js) reúne os contadores e a comparação entre `while` e `do...while` com condição inicialmente falsa.

### No navegador

Após baixar ou clonar o repositório, abra `javascript/04-loops/navegador.html` em um navegador. A página apresenta dois botões, um para cada exemplo com `prompt()`, e exibe as entradas na própria página e no console.

O [navegador.html](navegador.html) só abre os diálogos após um clique. A página de código no GitHub permite consultar o arquivo; para executá-lo, abra a cópia local no navegador.

## Para praticar

1. Troque `i <= 5` por `i < 5` no primeiro `for` e conte as saídas.
2. Altere o valor de `b` no `while` e observe quando o laço termina.
3. Inicie o contador do `do...while` com `10`, mantendo a condição `i <= 5`.
4. Nos exemplos do navegador, experimente uma entrada comum, a palavra ou opção de saída e o botão Cancelar.

[Voltar ao índice](../../README.md)
