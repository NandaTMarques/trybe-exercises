let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for(let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
}
let media = soma/10;
if (media > 20) {
    console.log(`O valor é maior que 20.`)
}else if (media <= 20) {
    console.log(`O valor é maior que 20.`)
}
console.log(`A média aritmética é: ${media}.` ); //pode ser de 2 jeitos
console.log('A média aritmética é: ' + media);