import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import List from './components/list';
import InputsList from './components/inputsList';

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <InputsList />
          <List />
        </Provider>
      </div>
    );
  }
}

export default App;
