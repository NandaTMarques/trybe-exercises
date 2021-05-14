import ADD from '../actions/constants/add';

const INITIAL_STATE = {
  form: {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    state: '',
    habitation: '',
    job: '',
    jobDescription: '',
    description: '',
  },
}

export default function formReducer (state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD: 
    return {
      ...state, form:{...state.form, [action.name]: action.value}
    };
    default:
      return state;
  }
}
