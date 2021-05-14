import React from 'react';
import ISSContext from './ISSContext';
import { getCurrentISSLocation, getPeopleInSpace } from '../services/issAPI';

class ISSProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      isFetching: false,
      showMap: true,
      peopleInSpace: [],
    };

    this.fetchISSLocation = this.fetchISSLocation.bind(this);
    this.fetchPeopleInSpace = this.fetchPeopleInSpace.bind(this);
    this.toggleMap = this.toggleMap.bind(this);
  }

  fetchISSLocation() {
    // seta isFetching pra true
    // fazer a requisicao
    // armazenar o resultado no context

    this.setState({ isFetching: true }, async () => {
      const { iss_position: { latitude, longitude } } = await getCurrentISSLocation();
      this.setState({
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        isFetching: false,
      });
    });
  }

  fetchPeopleInSpace() {
    this.setState({ isFetching: true }, async () => {
      const { people } = await getPeopleInSpace();
      this.setState({
        peopleInSpace: people,
        isFetching: false,
      });
    });
  }

  toggleMap() {
    this.setState(({ showMap }) => ({ showMap: !showMap }));
  }

  render() {
    const { children } = this.props;
    return (
      <ISSContext.Provider
        value={ {
          ...this.state,
          fetchISSLocation: this.fetchISSLocation,
          fetchNumberOfPeopleInSpace: this.fetchNumberOfPeopleInSpace,
          toggleMap: this.toggleMap,
          fetchPeopleInSpace: this.fetchPeopleInSpace,
        } }
      >
        {children}
      </ISSContext.Provider>
    );
  }
}

export default ISSProvider;
