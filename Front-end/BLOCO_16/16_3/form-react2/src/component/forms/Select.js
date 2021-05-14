import React from 'react';


function Select({title, id, children, ...restProps}) {
  return (
    <div className="select">
      <label htmlFor={ id }>
        { title + ' ' }
          <select id={id} {...restProps}>
            <option value="" selected>State...</option>
            {children}
          </select>  
      </label>
    </div>
  );
}

export default Select;