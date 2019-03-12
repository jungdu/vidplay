import React from "react";
import VidList from "./VidList";
import ControllerHead from "./ControllerHead";
import { connect } from "react-redux";

const VidController = props => {
  const { isListOpen } = props;

  return (
    <div className={`video-controller ${isListOpen ? "" : "close"}`}>
      <ControllerHead />
      <VidList />
    </div>
  );
};

const mapStateToProps = state => {
  return { isListOpen: state.layout.isListOpen };
};

export default connect(mapStateToProps)(VidController);
