import React from "react";
import { connect } from "react-redux";
import { openList, closeList } from "../../actions";

const PlayerHeader = props => {
  const { isListOpen, openList, closeList } = props;
  const iconClass = isListOpen
    ? "fa-arrow-alt-circle-left"
    : "fa-arrow-alt-circle-right";
  const openCloseList = () => {
    if (isListOpen) {
      closeList();
    } else {
      openList();
    }
  };

  return (
    <div className="player-header">
      <i
        className={`fas ${iconClass}`}
        id="list-openclose-icon"
        onClick={openCloseList}
      />
      Player
    </div>
  );
};

const mapStateToProps = state => {
  return { isListOpen: state.layout.isListOpen };
};

export default connect(
  mapStateToProps,
  { openList, closeList }
)(PlayerHeader);
