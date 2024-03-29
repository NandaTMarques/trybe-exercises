/*const readline = require('readline-sync');

function fibonacci() {
  const num = readline.questionInt('Digite um número: ');
  if (num <= 1) {
    return 1;
  }else {
    return fibonacci(num - 1) + fibonacci(num - 2);

  }
};

fibonacci();*/

const readline = require('readline-sync');

function calculaElemento (n) {
  // a armazena o último número que calculamos
  let a = 1;
  // b armazena o penúltimo número que calculamos
  let b = 1;

  // Repetimos o loop enquanto `n` for maior que 0
  for (; n >= 0; n--) {
    if (b) console.log(b);
    // Armazenamos o último valor calculado em uma variável temporária
    const temp = a;
    // Para calcular o novo valor, somamos o último valor com o penúltimo valor
    // O novo valor é armazenado em `a`, já que ele passa a ser o último valor calculado
    a = a + b;
    // O valor antigo de `a`, que estava armazenado na variável temporária
    // agora se torna o penúltimo número e, por isso, é armazenado em `b`
    b = temp;
  }

  console.log(b);
  return b;
}

function realizaCalculo() {
  const n = readline.questionInt('Digite o valor de n:');

  if (n <= 0) {
    console.log('Digite um número maior que 0!')
    return;
  }

  console.log(`n: ${n}`);

  calculaElemento(n - 2);
}

realizaCalculo();
