import React, { useEffect } from "react";
import { fetchVids, selectVid } from "../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const VidList = props => {
  const { vidList, selectedFile } = props;

  useEffect(() => {
    props.fetchVids();
  }, []);

  const onClickItem = item => {
    props.selectVid(item);
  };

  const renderList = () => {
    if (vidList && vidList.length > 0) {
      return vidList.map((elem, i) => {
        return (
          <li
            key={i}
            onClick={() => onClickItem(elem)}
            className={selectedFile === elem ? "playing" : ""}
          >
            {elem}
          </li>
        );
      });
    } else {
      return <li> Loading... </li>;
    }
  };

  return <ul className="video-list">{renderList()}</ul>;
};

VidList.propTypes = {
  vidList: PropTypes.arrayOf(PropTypes.string),
  selectedFile: PropTypes.string,
  playing: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    vidList: state.vid.vidList,
    playing: state.vid.playing,
    selectedFile: state.vid.selectedFile,
  };
};

export default connect(
  mapStateToProps,
  { fetchVids, selectVid },
)(VidList);
