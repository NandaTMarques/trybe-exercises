import React from 'react';

import BikeCard from './Bike'

class BikeList extends React.Component {
  render() {
    const { bikes } = this.props; // esse bikes vem do bikes App, que vem do data.js
    return (  // para redenrizar listas em react uso sempre o map
      <section className='bike-list'>
        {bikes.map(bike => <BikeCard key={bike.name} bike={bike} /> // preciso colocar a key sempre que usar o map, escolho algo unico no data
        )}
      </section>
    )
  }
}

export default BikeList;