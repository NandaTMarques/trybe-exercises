/*1. Caso algum dos parâmetros recebidos não seja um número, . .rejeite a Promise com o motivo "Informe apenas números".

2. Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
3. Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"

4. Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.*/

function mathNumber(abc) {
  const promise = new Promise((resolve, reject) => {
    const someParamNumber = abc.some((paramType) => {
      console.log(paramType)
      return typeof paramType === 'string';
    }) 
    
    if (someParamNumber) {
      return reject(new Error("Informe apenas números"));
    } else {
      const resultado = ( (abc[0] + abc[1]) * abc[2] );
      if (resultado < 50) {
        return reject(new Error('Valor muito baixo'));
      } 
      return resolve(resultado);
    }
  });
  return promise
}

function generateRandomNumber() {
  let count = 0
  let arrayNumbers = [];
  while(count < 3) {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    count += 1;
    arrayNumbers.push(randomNumber)
  }
  return arrayNumbers;
}

mathNumber(generateRandomNumber())
  .then((resultado) => console.log(`O resultado é ${resultado}.`))
  .catch((error) => console.error(`erro: ${error.message}`))
