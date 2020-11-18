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


const data = document.getElementById("dInicio");
const botaoEnvia = document.getElementById("botaoEnvia");

botaoEnvia.addEventListener("click", function(event) {
    event.preventDefault();
    const required = document.querySelectorAll("[required]");
    for (let itemRequired = 0; itemRequired < required.length; itemRequired += 1) {
      let input = required[itemRequired];
      if (input.required) {
        if (input.value === "") {
            alert(`O campo ${input.name} é obrigatório!`);
        }
      }
    }
});


