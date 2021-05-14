import PropTypes from 'prop-types';
import React, { Component, useState } from 'react';
import CarsContext from './CarsContext';

export function Provider({ children }) {
  const [red, setRed] = useState(false);
  const [blue, setBlue] = useState(false);
  const [yellow, setYellow] = useState(false);
  const [color] = useState('red');

  /* const [ cars, setCars ] = useState({
    red: false,
    blue: false,
    yellow: false,
  })
  function moveCarTwo(car, side) {
    setCars({
      cars: {
        ...cars,
        [car]: side,
      },
    });
  } */

  function moveCar(car, side) {
    switch (car) {
    case 'redCar':
      setRed(side);
      break;
    case 'BlueCar':
      setBlue(side);
      break;
    default:
      setYellow(side);
      break;
    }
  }

  return (
    <CarsContext.Provider value={ { red, blue, yellow, color, moveCar } }>
      {children}
    </CarsContext.Provider>
  );
}

/* class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: {
        color: 'red',
      },
    }
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  };

  changeSignal(signalColor) {
    this.setState({
      signal: {
        ...this.state.signal,
        color: signalColor,
      },
    });
  };

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    };

    const { children } = this.props;

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
  }
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}; */

export default Provider;
