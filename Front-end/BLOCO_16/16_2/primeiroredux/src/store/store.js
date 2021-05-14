import { createStore } from 'redux';
import rootReducer from '../reducers/index.reducers';

// criação do store
const store = createStore(rootReducer);

export default store;