let salBruto = 5000;
let descINSS;
                   //Calculo para desconto INSS
if (salBruto <= 1556.94){          
    descINSS = (salBruto * (8/100));
}
else if (salBruto > 1556.95 && salBruto < 2594.92){
    descINSS = (salBruto * (9/100));
}
else if (salBruto > 2594.93 && salBruto < 5189.82){
    descINSS = (salBruto * (11/100));
}
else if (salBruto > 5189.82){
    descontoINSS = (570.88);
}
                       //Calculo desconto IR
let salSemINSS = (salBruto - descINSS);
let descontocIR;

if (salSemINSS <= 1903.98){       
    descontoIR = (0);
}
else if (salSemINSS >= 1903.99 && salSemINSS <= 2826.65){
    descontoIR = ((salSemINSS * 0.075) - 142.80);
}
else if (salSemINSS >= 2826.66 && salSemINSS <=3751.05){
    descontoIR = ((salSemINSS * 0.15) - 354.80);
}
else if (salSemINSS >= 3751.06 && salSemINSS <= 4664.68){
    descontoIR = ((salSemINSS * 0.225) - 636.13);
}
else if (salSemINSS > 4664.68){
    descontoIR = ((salSemINSS * 0.275) - 869.36);
}

let salLiquido = (salSemINSS - descontoIR);
console.log("Desconto IR R$ " + descontoIR);
console.log("Desconto INSS R$ " + descINSS);
console.log("Salário Liquido R$ " + salLiquido);
