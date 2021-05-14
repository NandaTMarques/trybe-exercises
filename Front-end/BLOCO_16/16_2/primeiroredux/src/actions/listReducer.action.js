import list from '../constant/listReducer';

// criação das actions
const addAssignment = (value) => ({
  type: list.addElement,
  value,
})

export default addAssignment;
