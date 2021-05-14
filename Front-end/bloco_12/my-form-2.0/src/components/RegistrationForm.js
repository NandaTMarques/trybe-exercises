import React from 'react';
import LoginInput from './LoginInput';
import PassWordInput from "./PasswordInput";
import NameInput from './NameInput';

class RegistrationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      login: '',
      password: '',
      name: '',
    };
  }

  handleChange = (event) => { // quero pegar valor que a pessoa digitou (evento) e enviar pro state
    console.log(event.target.name); // quero que esse valor aui seja o a minha key abaixo
    this.setState({
      [event.target.name]: event.target.value, // colocar entre colchetes senao nao da certo
    });
  }

  handleSubmit = (event) => { // quero pegar valor que apessoa digitou (evento) e enviar pro state
    //console.log(this);
    event.preventDefault(); //usar sempre pra nao recarregar a pagina
    alert('login funcionour');
  }

  render() {
    const { name, login, password } = this.state;
    return(
      <section className="registration-form">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <NameInput value={name} onChange={this.handleChange}/>
          <LoginInput value={login} onChange={this.handleChange}/*login é o valor desse input*//> 
          <PassWordInput value={password} onChange={this.handleChange}/>
          <button type="submit">Login</button>
        </form>
      </section>
    )
  }
}

export default RegistrationForm;
