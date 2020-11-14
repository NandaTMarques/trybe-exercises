function criaListaDeEstados() {
    let grupoEstados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas','Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás','Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais','Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro','Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima','Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
    let estados = document.getElementById('estado');

    for (let index = 0; index < grupoEstados.length; index += 1) {
        const est = document.createElement('option');
        const estado = grupoEstados[index];

        est.innerText = estado;

        estados.appendChild(est);
    }
}
criaListaDeEstados();


document.getElementById("botaoEnvia").addEventListener("click", function(event){
    event.preventDefault()
    alert('Preencha os campos Obrigatórios.')
});