import React from 'react'; //, { useEffect }
// import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux'; //
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';
import NotFound from './NotFound';

function Player(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const playing = useSelector((state) => state.playing);
  const dispatchAction = (videoId) => dispatch(getVideoSource(videoId));
  dispatchAction(id);
  getVideoSource(id);
  // const { playing } = props;
  const hasPlaying = Object.keys(playing).length > 0;
  console.log('-', id, playing, props);
  // useEffect runs after the render. Doesn’t run on server-side render
  // useEffect(() => {
  //   dispatch(getVideoSource(id));
  //   console.log('1', id, playing);
  // }, [id]);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => navigate.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <NotFound />
  );
}

// Player.propTypes = {
//   playing: PropTypes.object,
//   getSource: PropTypes.array,
// };

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
