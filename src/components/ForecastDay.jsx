import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const cursorPointer = {
  cursor: "pointer"
};

function ForecastDay(props) {
  const getMaxTemp = list => {
    const listTempMax = list.map(obj => {
      return obj.main.temp_max;
    });

    return Math.max(...listTempMax);
  };

  const getMinTemp = list => {
    const listTempMin = list.map(obj => {
      return obj.main.temp_min;
    });
    return Math.min(...listTempMin);
  };

  const getNameDay = str => {
    const weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    const date = new Date(str);
    const nameDay = weekdays[date.getDay()];
    return nameDay;
  };

  const getNumberDay = str => {
    const date = new Date(str);
    const fecha = `${date.getDate()} / ${date.getMonth() + 1}`;
    return fecha;
  };

  const getIndex = list => {
    return Math.trunc(list.length / 2);
  };

  const handleClick = event => {
    event.preventDefault();
    props.updateDetail(props.data);
  };

  const { data } = props;

  const { icon } = data[getIndex(data)].weather[0];
  const nameDay = getNameDay(data[0].dt_txt);
  const numberDay = getNumberDay(data[0].dt_txt);
  const maxTemp = getMaxTemp(data);
  const minTemp = getMinTemp(data);

  return (
    <div
      style={cursorPointer}
      className="card align-items-center"
      onClick={handleClick}
      onKeyPress={handleClick}
      role="button"
      tabIndex="0"
    >
      <Icon className="card-img-top" icon={icon} />
      <div className="card-body">
        <h5 className="card-title">{nameDay}</h5>
        <strong>{numberDay}</strong>
      </div>
      <div className="card-footer w-100">
        <small className="text-muted">{`${maxTemp} C° ${minTemp} C°`}</small>
      </div>
    </div>
  );
}

ForecastDay.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateDetail: PropTypes.func.isRequired
};

export default ForecastDay;
