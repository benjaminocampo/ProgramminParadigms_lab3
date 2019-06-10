import React from "react";
import PropTypes from "prop-types";

const weatherFormInput = {
  borderRadius: "25px",
  height: "40px"
};

function WeatherForm(props) {
  const locationInput = React.createRef();

  const handleSubmit = event => {
    event.preventDefault();
    props.updateLocation(locationInput.current.value);
  };

  return (
    <nav className="bg-info navbar navbar-light bg-transparent">
      <form className="form-inline" onSubmit={handleSubmit}>
        <input
          style={weatherFormInput}
          ref={locationInput}
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-danger my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
}

WeatherForm.propTypes = {
  updateLocation: PropTypes.func.isRequired
};

export default WeatherForm;
