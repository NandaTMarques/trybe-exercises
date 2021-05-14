import React from 'react';

class PassWordInput extends React.Component {
  validatePassword = (password) => {
    const isValid = password.length >= 6; //pra validar o senha
    if (!isValid || password.length === 0) { //se o texto digitado nao for valido ou for = a 0...
      return 'Invalid Password.'
    }
    return '';
  }
  render() {
    return (
      <label htmlFor="password">
        PassWord:
        <input 
          type="password"
          value={this.props.value} /* ligo ao setState, essa password vem de la do LoginForm*/
          onChange={this.props.onChange} /*acessando a funçao handleChange do componente LoginForm através de props*/
          name="password" //uso essa propriedade no meu handleChange genérico (o valor de name tem que ser = a key do objeto do state la de cima)
          id="password"
          minLength="8"
          maxLength="10"
        />
        <span className="form-error">{this.validatePassword(this.props.value)}</span>
      </label>
    );
  }
}

export default PassWordInput;
