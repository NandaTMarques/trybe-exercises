import React from 'react';
import { render } from '@testing-library/react';
import Digimon from './Digimon';

describe('Teste da tela do Digimon', () => {
  const digimon = [
    {
      level: "Rookie",
      img: "https://digimon.shadowsmith.com/img/agumon.jpg",
      name: "Agumon"
    }
  ]
  const { level, img, name } = digimon[0];
  it('renders Digimon', async () => {
    const { getByText, getByAltText, getByRole } = render(<Digimon digimon={digimon[0]} />);
    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(`level: ${level}`)).toBeInTheDocument();
    expect(getByAltText(name).src).toBe(img);
    expect(getByRole('img')).toBeInTheDocument();
  });
});