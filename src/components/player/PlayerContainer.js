import React from "react";
import MainPlayer from "./MainPlayer";
import PlayerHeader from "./PlayerHeader";
const PlayerContainer = () => {
  return (
    <div className="video-player">
      <PlayerHeader />
      <MainPlayer />
    </div>
  );
};

export default PlayerContainer;
