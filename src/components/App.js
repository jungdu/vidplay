import React from "react";
import VidController from "./VidController";
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
