import React from 'react';

class LoginInput extends React.Component { //FUNÇaO PRa VaLIDaR FORMULaRIO
  validateEmail = (email) => {
    const isValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i); //pra validar o email
    if (!isValid || email.length === 0) { //se o texto digitado nao for valido ou for = a 0...
      return 'Invalid email.'
    }
    return '';
  }
  render() {
    return (
      <label>
        Login:
        <input 
          type="text"
          value={this.props.value} /* ligo ao setState, esse login vem de la do LoginForm*/
          onChange={this.props.onChange} /*acessando a funçao handleChange do componente LoginForm através de props*/
          name="login" 
          id="login"
        />
        <span className="form-error">{this.validateEmail(this.props.value)}</span>
      </label>
    )
  }
}

export default LoginInput;
