import React from 'react';
import VideoGame from './VideoGame';
import PropTypes from 'prop-types'

class VideoGameList extends React.Component {
  render() {
    const { games } = this.props;
    return (
      <div className='video-game-list'>
        {games.map((gamex, index)=> <VideoGame key={index} game={gamex}/>)}
      </div>
    )
  }
}

export default VideoGameList

VideoGameList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    developer: PropTypes.string,
    sales: PropTypes.string
  }))
}

VideoGameList.defaultProps = {
  games: []
}
