import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import fetchMock from 'fetch-mock-jest';
import App from './App';
// demais imports...
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';
import renderWithReduxTwo from './renderWithRedux';

const renderWithReduxOne = (
  component,
  { 
    initialState, 
    store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithReduxOne(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });
  test('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithReduxOne(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(queryByText('5')).toBeInTheDocument();
  });
});
