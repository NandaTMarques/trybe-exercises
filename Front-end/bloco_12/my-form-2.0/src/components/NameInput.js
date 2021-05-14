import React from 'react';

class NameInput extends React.Component {
  validateName = (name) => {
    if (name.length === 0) { //se o texto digitado for = a 0...
      return 'Invalid Name.'
    }
    return '';
  }
  render() {
    return (
      <label>
        Name:
        <input 
          type="text"
          value={this.props.value} /* ligo ao setState, essa password vem de la do LoginForm*/
          onChange={this.props.onChange} /*acessando a funçao handleChange do componente LoginForm através de props*/
          name="name" //uso essa propriedade no meu handleChange genérico (o valor de name tem que ser = a key do objeto do state la de cima)
          id="name"
          required
          maxLength="30"
        />
        <span className="form-error">{this.validateName(this.props.value)}</span>
      </label>
    );
  }
}

export default NameInput;