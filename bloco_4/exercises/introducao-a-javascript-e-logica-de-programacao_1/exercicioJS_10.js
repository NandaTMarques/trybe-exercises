let custoProduto = 20;
let precoVenda = 100;
let custoTotal = custoProduto + (custoProduto * 20/100);
let lucroM = 1000 * (precoVenda - custoTotal);
if (custoProduto <= 0 || precoVenda <= 0) {
    console.log("Valor inválido!!");
}else {
    console.log(lucroM);
}