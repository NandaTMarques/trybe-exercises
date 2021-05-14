import listReducer from './listReducer.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ listReducer });

export default rootReducer;