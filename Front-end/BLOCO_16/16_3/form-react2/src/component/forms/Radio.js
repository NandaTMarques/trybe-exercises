import React from 'react';

function Radio({title, id, ...restProps}) {
  return (
    <div>
      <input type="radio" id={id} {...restProps} />
      <label htmlFor={id}>{title + ' '}</label>
    </div>
  );
}

export default Radio;