import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>{this.props.title}</p>
      </footer>
    );
  }
}

export default Footer;

Footer.propTypes = {
  title: PropTypes.string
}

Footer.defaultProps = {
  title: 'xablau de novo'
}
