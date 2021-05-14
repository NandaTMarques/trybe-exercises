import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { name, type } = this.props;
    const labelName = name[0].toUpperCase() + name.substr(1);
    return (
      <div className="buttons">
        <button type={type} id={ name }>{ labelName }</button>
      </div>
    );
  }
}

Button.defaultProps = {
  name: 'default',
  type: 'text',
}

Button.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
}

export default Button;
