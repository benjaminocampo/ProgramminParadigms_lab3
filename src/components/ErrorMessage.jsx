import React from "react";
import PropTypes from "prop-types";

function ErrorMessage(props) {
  const { error } = props;
  return (
    <div>
      <h1>{error}</h1>
    </div>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired
};

export default ErrorMessage;