import React from 'react';
import PropTypes from 'prop-types';

class VideoGame extends React.Component {
  render() {
    const { title, developer, sales } = this.props.game;

    return (
      <p>
        <strong>{title}</strong>, made by <em>{developer}</em>, sold {sales} units
      </p>
    )
  }
}

export default VideoGame;

VideoGame.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string,
    developer: PropTypes.string,
    sales: PropTypes.number
  })
}

VideoGame.defaultProps = {
  game: {}
};
