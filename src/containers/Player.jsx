import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';
import NotFound from './NotFound';

function Player(props) {
  const { match, playing } = props;
  const { history, getSource = getVideoSource } = props;
  const { id } = match.params;
  const hasPlaying = Object.keys(playing).length > 0;
  useEffect(() => {
    getSource(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <NotFound />
  );
}

Player.propTypes = {
  match: PropTypes.object,
  playing: PropTypes.object,
  history: PropTypes.object,
  getSource: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
