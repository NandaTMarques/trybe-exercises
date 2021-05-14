import list from '../constant/listReducer';

// criação do reducer
const INITIAL_STATE = [];

function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case list.addElement:
      return [...state, action.value];
    default:
      return state;
  }
}

export default listReducer;
