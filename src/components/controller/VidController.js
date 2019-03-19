import React from "react";
import VidList from "./VidList";
import ControllerHead from "./ControllerHead";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const VidController = props => {
  const { isListOpen } = props;

  return (
    <div className={`video-controller ${isListOpen ? "" : "close"}`}>
      <ControllerHead />
      <VidList />
    </div>
  );
};

VidController.propTypes = {
  isListOpen: PropTypes.bool
};

const mapStateToProps = state => {
  return { isListOpen: state.layout.isListOpen };
};

export default connect(mapStateToProps)(VidController);
