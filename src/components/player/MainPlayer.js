import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";

const MainPlayer = props => {
  const videoTag = useRef();
  const sourceTag = useRef();
  const { playing } = props;

  const changeSource = () => {
    if (playing) {
      sourceTag.current.src = `http://localhost:4000/stream/video?filename=${playing}`;
      videoTag.current.load();
    }
  };

  useEffect(() => {
    changeSource();
  }, [playing]);

  return (
    <video id="main-player" controls muted="muted" autoPlay ref={videoTag}>
      <source
        ref={sourceTag}
        src={`http://localhost:4000/stream/video?filename=remotube.mp4`}
        type="video/mp4"
      />
    </video>
  );
};

const mapStateToProps = state => {
  return { playing: state.vid.playing };
};

export default connect(mapStateToProps)(MainPlayer);
