import React from "react";

const View = (props) => {
  return (
    <div className="data-container">
      <h3 className="cool-text">
        Percentage of data to be cool: {props.cool_percent} %
      </h3>
      <button
        className="cool-edit-btn"
        type="button"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </div>
  );
};

export default View;
