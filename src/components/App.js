import React from "react";
import VidController from "./controller/VidController";
import PlayerContainer from "./player/PlayerContainer";

const App = () => {
  return (
    <div className="App">
      <VidController />
      <PlayerContainer />
    </div>
  );
};

export default App;
