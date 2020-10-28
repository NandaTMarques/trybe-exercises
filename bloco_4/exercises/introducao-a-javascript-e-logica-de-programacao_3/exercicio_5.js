let n = 5;
let middle = (n + 1)/2;  // soma com 1 pq a metade de numero impar da quebrado, assim da sempre inteiro.
let controlLeft = middle;
let controlRight = middle;
let symbol = '*'

for (let line = 1; line <= middle; line += 1) {
    let outPut = '';
    for (let col = 1; col <= n; col += 1) {
        if (col == controlLeft || col == controlRight || line == middle) {
            outPut += symbol;
        }else {
            outPut += ' ';
        }
    }
    controlLeft -= 1;
    controlRight += 1;
    
    console.log(outPut);  
}
 