import React from "react";
import VidList from "./VidList";
import ControllerHead from "./ControllerHead";

const VidController = () => {
  return (
    <div className="video-controller">
      <ControllerHead />
      <VidList />
    </div>
  );
};

export default VidController;
