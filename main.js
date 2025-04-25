function fibonacci(n, sequencia = [0, 1]) {
  // a variavel é sequencia dada como parametro
  if (sequencia.length >= n) return sequencia.slice(0, n); // comparando se o numero é maior e usando o slice pra retornar N
  return fibonacci(n, [
    ...sequencia, // spread pra copiar todos os elementos
    sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2], // -1 pega o ultimo valor e -2 o penultimo e soma
  ]);
}
console.log(fibonacci(10)); // defina ( n )
