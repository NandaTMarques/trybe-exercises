import React from 'react';
import PokemonCard from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <section className='pokedex'>
        {pokemons.map(pokemonx => <PokemonCard key={pokemonx.id} pokemon={pokemonx} />
        )}
      </section>
    );
  }
}

export default Pokedex;