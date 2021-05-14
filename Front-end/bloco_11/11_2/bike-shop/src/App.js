import React from 'react';

import BikeList from './Components/BikeList';
import Navbar from './Components/NavBar';
import { bikes } from './data'; // pego bikes do data e passo como parametro atraves de props

import './App.css';

class App extends React.Component { // 3. o App trouxe o arquivo Bike com o componente <Bike/>
  render() {
    return (// pro componente renderizar eu preciso colocar ele em formato HTML = <Bike />
      <main className='main-container'>
        <Navbar />
        <BikeList bikes= {bikes}/> 
      </main>
    );
  }
}

export default App;
