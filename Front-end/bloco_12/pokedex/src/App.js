import React from 'react'; // importar o react se o componente for de class
import Pokedex from './Pokedex';
import pokemons from './data'

import './App.css';

class App extends React.Component { // componente class
  render() { // componente class
    return (
      <section className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons} />
      </section>
    )
  }
} 
export default App;
