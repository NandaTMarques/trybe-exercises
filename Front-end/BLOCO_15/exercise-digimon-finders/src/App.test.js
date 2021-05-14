import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

describe('Teste da aplicação toda', () => {
  const digimon = [
    {
      level: "Rookie",
      img: "https://digimon.shadowsmith.com/img/agumon.jpg",
      name: "Agumon"
    }
  ]
  it('renders App', async () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Acessar o Input', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(digimon)
    })
    const { getByTestId, findByText } = render(<App />);
    const findInput = getByTestId('input');
    const findButton = getByTestId('buttonSearch');
    expect(findInput).toBeInTheDocument();
    expect(findButton).toBeInTheDocument();
    fireEvent.change(findInput, { target:{ value:'agumon'} });
    fireEvent.click(findButton);
    await findByText(/agumon/gi);
  })

});