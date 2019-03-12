import React from "react";
import VidList from "./VidList";
import ControllerHead from "./ControllerHead";
import { connect } from "react-redux";

const VidController = props => {
  const { isListOpen } = props;

  const render = () => {
    if (isListOpen) {
      return (
        <div className="video-controller">
          <ControllerHead />
          <VidList />
        </div>
      );
    } else {
      return null;
    }
  };

  return render();
};

const mapStateToProps = state => {
  return { isListOpen: state.layout.isListOpen };
};

export default connect(mapStateToProps)(VidController);
