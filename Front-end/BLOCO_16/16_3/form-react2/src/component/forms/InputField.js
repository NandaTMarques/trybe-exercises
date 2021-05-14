import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputField extends Component {
  render() {
    const { name, type, maxlength, onChange } = this.props;
    const labelName = name[0].toUpperCase() + name.substr(1);
    return (
      <div className="control">
        <label htmlFor={ name }>
          { `${labelName} ` }
        <input className="input" type={ type } maxlength={ maxlength } id={ name } name={ name } onChange={({target}) => onChange(target.name, target.value)}/>    
        </label>
      </div>
    );
  }
}

InputField.defaultProps = {
  name: 'default',
  type: 'text',
  maxlength: 40,
}

InputField.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  maxlength: PropTypes.number,
}

export default InputField;
