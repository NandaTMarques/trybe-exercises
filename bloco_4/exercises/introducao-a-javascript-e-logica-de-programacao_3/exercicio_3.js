let n = 5;

let symbol = '*'
for (let line = 1; line <= n; line += 1) {
    outPut = '';
    for (let col = 1; col <= n; col += 1) {
        if (col <= n - line) {
            outPut += ' '; 
        }else {
            outPut += symbol; 
        }
    }
    console.log(outPut);  
}
