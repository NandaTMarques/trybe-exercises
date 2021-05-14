import React from 'react';

function InputText({title, ...restProps}) {
  return (
    <div>
      <label>
        {title + ' '}
        <input {...restProps}/>
      </label>
    </div>
  );
}

export default InputText;
