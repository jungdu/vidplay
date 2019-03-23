import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const MainPlayer = props => {
  const videoTag = useRef();
  const sourceTag = useRef();
  const subtitleTag = useRef();
  const { playing } = props;

  const changeSource = () => {
    if (playing) {
      sourceTag.current.src = playing;
      // subtitleTag.current.src = "";
      videoTag.current.load();
    }
  };

  useEffect(() => {
    changeSource();
  }, [playing]);

  return (
    <video id="main-player" controls autoPlay ref={videoTag}>
      <source ref={sourceTag} type="video/mp4" />
      <track label="English" ref={subtitleTag} kind="subtitles" srcLang="en" default />
    </video>
  );
};

MainPlayer.propTypes = {
  playing: PropTypes.string,
};

const mapStateToProps = state => {
  return { playing: state.vid.playing };
};

export default connect(mapStateToProps)(MainPlayer);
