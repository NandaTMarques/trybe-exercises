import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Estados from '../elementos/estados';

class InputBox extends Component {

  render() {
   
    const { name } = this.props;
    const labelName = name[0].toUpperCase() + name.substr(1);
    return (
      <div className="select">
        <label htmlFor={ name }>
          { `${labelName} ` }
            <select id={ name } name={ name } value=''>
              <option selected></option>
            {Estados.map((estado) => {
              return (
              <option value={estado}>{estado}</option>)
            })}
            </select>  
        </label>
      </div>
    );
  }
}

InputBox.defaultProps = {
  name: 'default',
}

InputBox.propTypes = {
  name: PropTypes.string,
}

export default InputBox;
