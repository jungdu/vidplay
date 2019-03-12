import React, { useEffect } from "react";
import { fetchVids, selectVid } from "../actions";
import { connect } from "react-redux";

const VidList = props => {
  useEffect(() => {
    props.fetchVids();
  }, []);

  const onClickItem = item => {
    props.selectVid(item);
  };

  const renderList = () => {
    const { vidList } = props;
    if (vidList && vidList.length > 0) {
      return vidList.map((elem, i) => (
        <li key={i} onClick={() => onClickItem(elem)}>
          {elem}
        </li>
      ));
    } else {
      return <li>There is no video</li>;
    }
  };

  return <ul className="video-list">{renderList()}</ul>;
};

const mapStateToProps = state => {
  return {
    vidList: state.vid.vidList
  };
};

export default connect(
  mapStateToProps,
  { fetchVids, selectVid }
)(VidList);
