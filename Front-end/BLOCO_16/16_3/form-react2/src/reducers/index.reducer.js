import { combineReducers } from 'redux';
import formReducer from './form.reducer';

const rootReducer = combineReducers({
  formReducer,
})

export default rootReducer;

/*export default combineReducers ({
  form: formReducer,
})*/
