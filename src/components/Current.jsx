import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const measuresStyle = {
  fontSize: "20px",
  listStyle: "none",
  margin: "0",
  padding: "0"
};

function Current(props) {
  const timeConverter = unixTimestamp => {
    let timestamp = unixTimestamp;
    timestamp -= 10800;
    return new Date(timestamp * 1000).toISOString().slice(-13, -8);
  };
  const { data } = props;
  const measures = data.main;
  const { sys } = data;
  const { icon } = data.weather[0];
  const description = data.weather[0].description.toUpperCase();

  return (
    <div className="d-flex justify-content-around">
      <figure className="m-0">
        <Icon icon={icon} />
        <strong>{description}</strong>
      </figure>
      <div className="container">
        <ul className="row" style={measuresStyle}>
          <li className="col">
            <strong>Temperature:</strong>
            {`${measures.temp} C°`}
          </li>
          <li className="col">
            <strong>Preassure:</strong>
            {`${measures.pressure} hpm`}
          </li>
          <li className="col">
            <strong>Sunset:</strong>
            {timeConverter(sys.sunset)}
          </li>
          <li className="col">
            <strong>Sunrise:</strong>
            {timeConverter(sys.sunrise)}
          </li>
          <li className="col">
            <strong>Wind:</strong>
            {`${data.wind.speed} Km/h`}
          </li>
          <li className="col">
            <strong>Humidity:</strong>
            {`${measures.humidity} %`}
          </li>
          <li className="col">
            <strong>Max Temp:</strong>
            {`${measures.temp_max} C°`}
          </li>
          <li className="col">
            <strong>Min temp:</strong>
            {`${measures.temp_min} C°`}
          </li>
        </ul>
      </div>
    </div>
  );
}

Current.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Current;
