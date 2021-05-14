import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import App from './App';
// demais imports...
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers/index';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });
  test('the page should has a button and a text 0', () => {
    const initialState = {
      clickReducer: {
        counter: 5
      }
    }
    const { queryByText } = renderWithRedux(<App />, { initialState });
    const buttonAdicionar = queryByText('Clique aqui');
    expect(buttonAdicionar).not.toBeNull();
    expect(queryByText('5')).not.toBeNull();
  });
});
