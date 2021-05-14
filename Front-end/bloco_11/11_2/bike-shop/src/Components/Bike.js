import React from 'react';
import PropTypes from 'prop-types'; //PropTypes maiusculo é nome da variavel, minusculo é nome da biblioteca

class Bike extends React.Component {
  render() { // a section vai ser a parte na minha tela ue exibira a bicicleta/ o this se refere a propria classe
    const { bike } = this.props; 
    const {name, picture, price, color} = bike; // variavel fica dentro do render
    return ( // tudo dentro das {} é interpretado como JS
      <section className='bike-card'>
        <h3>{name}</h3>
        <img src={picture} alt={'Imagem da Bicicleta'}/>
        <div>R$ {price}</div>
        <div> Cor: {color}</div>
      </section>
    )
  }
}
//propTypes com letra minuscula é o nome da biblioteca
Bike.propTypes = {
  bike: PropTypes.shape({ //uso a funçao shape pra objetos
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    /*pecas: PropTypes.shape({
      color: PropTypes.string,*/ // Se eu tiver um objeto dentro do outro, coloco um shape dentro do outro.
    })
  }).isRequired,
}
// caso o meu componente (props) nao receba o formato esperado de props, devo estabelecer o 
// defaultProps, que é um valor padrao que vai aparecer caso eu nao receba valores pra minha propriedade
// Caso nao precise usar o defaultProps eu posso usar na propTypes a propriedade 'isRequired'

/*Bike.defaultProps = {
    name: 'bike Padrao (ou Undefined)',
    picture: '',
    price: 0,
    color: 'undefined',
}*/

export default Bike;
/* Formas de importar e exportar:
1. export default Bike;
1. import Bike(poderia ser qq nome, msm assim iria se referir a Bike) from './NomeDoarquivo';
exporto e importo tudo;
ou
2. export const Bike;
2. import { test } from './NomeDoarquivo'; (desestruturando - aí sim o nome tem que ser igual)
exporto e importo só o especificado, uma constante isolada.*/