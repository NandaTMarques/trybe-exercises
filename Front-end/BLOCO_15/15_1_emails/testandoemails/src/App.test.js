import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  const { getByLabelText } = render(<App />);
  const inputEmail = getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

// test 1
// test('Verificando se existe um(1) botão', () => {
//   const { getByRole } = render(<App />);
//   const btn = getByRole('button');
//   expect(btn).toBeInTheDocument();
// });

// test 2
test('Verificando se existe dois botões', () => {
  const { getAllByRole } = render(<App />);
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(2);
});

test('Verificando se existe um botão de enviar', () => {
  const { getByTestId } = render(<App />);
  const btn = getByTestId('id-send');
  expect(btn).toBeInTheDocument();
  expect(btn.type).toBe('button');
  expect(btn).toHaveValue('Enviar');
});

test('Verificando se o botão e o campo email estão funcionando.', () => {
  const { getByTestId, getByLabelText } = render(<App />);
/* Primeiro renderizamos a aplicação, depois salvamos o email do usuário em uma variável (o que é uma boa prática).*/
  const EMAIL_USER = 'email@email.com';

/*Depois, verificamos se o h2 onde o email aparece na tela está apenas com o texto Valor: */

  const textEmail = getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  /*Depois, verificamos se o h2 onde o email aparece na tela está apenas com o texto Valor: ,*/

  const btnSend = getByTestId('id-send');
  const inputEmail = getByLabelText('Email');
  
  /*
  1.Simulamos a digitação do usuário no campo de email com o fireEvent.change(inputEmail, { target: { value: EMAIL_USER } }); . Quando se passa um segundo parâmetro para a função fireEvent.change estamos adicionando valores às propriedades do evento, nesse caso adicionamos o valor 'email@email.com' ao event.target.value .
  2.Simulamos um clique no botão com o fireEvent.click(btnSend) , o que simula o clique de quem usa no botão.
  3. Verificamos o campo de email se está vazio e se o h2 onde o valor do email deveria aparecer tem o conteúdo desejado, que é Valor: email@email.com .*/

  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
  fireEvent.click(btnSend);
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});
