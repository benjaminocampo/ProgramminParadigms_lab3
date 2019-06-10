import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

function ForecastDayDetails(props) {
  const getThreeHours = str => {
    const date = new Date(str);
    const hours = date.getHours();
    const threeHoursAfter = (hours + 3) % 24;
    return `${hours}:00 - ${threeHoursAfter}:00`;
  };

  const { icon } = props;
  const { day } = props;
  const { temperature } = props;
  const { pressure } = props;
  const { minTemp } = props;
  const { windSpeed } = props;
  const { humidity } = props;
  const { maxTemp } = props;
  const { time } = props;
  const hours = getThreeHours(time);

  return (
    <div className="card">
      <Icon className="card-img-top" icon={icon} />
      <div className="card-body">
        <h5 className="card-title">{day}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li key="1" className="list-group-item">
          <strong>Temperature:</strong>
          {`${temperature} C°`}
        </li>
        <li key="2" className="list-group-item">
          <strong>Pressure:</strong>
          {`${pressure} hpm`}
        </li>
        <li key="3" className="list-group-item">
          <strong>Min temp:</strong>
          {`${minTemp} C°`}
        </li>
        <li key="4" className="list-group-item">
          <strong>Wind:</strong>
          {`${windSpeed} Km/h`}
        </li>
        <li key="5" className="list-group-item">
          <strong>Humidity:</strong>
          {`${humidity} %`}
        </li>
        <li key="6" className="list-group-item">
          <strong>Max Temp:</strong>
          {`${maxTemp} C°`}
        </li>
      </ul>
      <div className="card-body">
        <strong className="card-link">{hours}</strong>
      </div>
    </div>
  );
}

ForecastDayDetails.propTypes = {
  day: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired
};

export default ForecastDayDetails;
