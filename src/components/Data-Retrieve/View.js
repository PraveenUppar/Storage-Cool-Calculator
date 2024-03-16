import React from "react";

const View = (props) => {
  return (
    <div className="data-container">
      <h3 className="data-input-text">
        Retrieve Percentage: {props.data_retrieve} %
      </h3>
      <button
        className="data-edit-button"
        type="button"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </div>
  );
};

export default View;
