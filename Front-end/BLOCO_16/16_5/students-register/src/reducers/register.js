const initialState = [];

function registerReducer(state = initialState, action) {
  switch (action.type) {
  case 'ADD_REGISTER':
    return [...state, action.data];
  case 'DELETE_REGISTER':
    return state.filter((register) => register !== action.value);
  default:
    return state;
  }
}

export default registerReducer;

/* no filter acima retorno todos os elementos com valor diferente do valor da action */
