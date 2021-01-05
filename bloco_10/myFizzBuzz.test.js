/*A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número
for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna 
"buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível 
por 3 ou 5 e retorna false caso num não seja um número
Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado*/
// myFizzBuzz.test.js
const myFizzBuzz = require('./myFizzBuzz');

describe('myFizzBuzz', () => {
  test('returns `fizzbuzz` if the number is divisible by 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('return `fizz` if the number is divisible only by 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  test('return `buzz` if the number is divisible only by 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  test('returns the own number if it is not divisible by 3 or 5', () => {
    expect(myFizzBuzz(16)).toBe(16);
  });
  test('returns `false` if the argument is not a number', () => {
    expect(myFizzBuzz('16')).toBe(false);
  });
  /*test('returns `false` if the argument is not a number', () => {
    expect(myFizzBuzz('this_is_not_a_number')).toBeFalsy();
  });*/
});