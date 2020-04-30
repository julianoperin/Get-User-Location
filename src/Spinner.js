import "./Spinner.css";
import React from "react";

const Spinner = props => {
  return (
    <div className="spinner">
      <i class="fas fa-spinner"></i>
      &nbsp;&nbsp;
      <p>{props.message}</p>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading..."
};

export default Spinner;
