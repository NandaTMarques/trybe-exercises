import React from 'react';
import data from '../elementos/estados';

function SelectItem(props) {
  return (
    <>
      {data.map((item) => <option value={item}>{item}</option>)}
    </>
  );
}

export default SelectItem;
