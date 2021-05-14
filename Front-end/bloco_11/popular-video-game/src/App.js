import React from 'react';
import './App.css';
import VideoGameList from './VideoGameList';
import Footer from './footer';
import data from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <VideoGameList games={data} />
        <Footer title="Made during live lecture"/>
      </div>
  );
}
}

export default App;
/* 1. faço o app.js;
2. faço o videoGame
3. faço o videoGameList
*/
