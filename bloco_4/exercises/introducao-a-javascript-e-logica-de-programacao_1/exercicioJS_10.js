let custoProduto = 28;
let precoVenda = 100;
if (custoProduto <= 0 || precoVenda <= 0) {
    console.log("Valor inválido!!");
}else {
    let custoTotal = custoProduto + (custoProduto * 20/100);
    let lucroM = 1000 * (precoVenda - custoTotal);
    console.log(lucroM);
}