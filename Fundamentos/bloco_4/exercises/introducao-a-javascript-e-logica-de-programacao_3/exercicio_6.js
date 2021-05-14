let num = 18;
let numDivisores = 0;
let listaDividores = [];
let check = '';
for(let index = 1; index <= num; index += 1) {
    if (num % index === 0) {
        numDivisores += 1;
        listaDividores.push(index);
    }
    if (numDivisores === 2) {
        check = 'É primo.';
    }else {
        check = 'Não é primo.'
    }  
}
console.log(listaDividores)
console.log(check);
