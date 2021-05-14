import ADD from './constants/add';

export default function add(name, value) {
  return {
    type: ADD,
    name,
    value,
  }
}
