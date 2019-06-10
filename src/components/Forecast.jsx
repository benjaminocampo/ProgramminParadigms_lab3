import React from "react";
import PropTypes from "prop-types";
import ForecastDay from "./ForecastDay";
import ForecastDayDetails from "./ForecastDayDetails";

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: []
    };
  }

  getDays = (data, day) => {
    const days = data.filter(obj => {
      const aux = obj.dt_txt.split(" ", 1);
      return day === new Date(aux).getTime();
    });
    return days;
  };

  getListDays = () => {
    const milisecPerDay = 86400000;
    const { data } = this.props;
    let firstDay = data[0].dt_txt;
    firstDay = firstDay.split(" ", 1);
    const fst = new Date(firstDay).getTime();

    let lastDay = data[39].dt_txt;
    lastDay = lastDay.split(" ", 1);
    const lst = new Date(lastDay).getTime();
    const listDays = [];

    for (let i = fst; i <= lst; i += milisecPerDay) {
      listDays.push(this.getDays(data, i));
    }

    return listDays;
  };

  updateDetail = data => {
    this.setState({
      detail: data
    });
  };

  getNameDay = str => {
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

  render() {
    const { detail } = this.state;
    return (
      <div>
        <div className="card-deck m-5 w-auto">
          {this.getListDays().map(obj => (
            <ForecastDay
              key={obj.dt}
              data={obj}
              updateDetail={this.updateDetail}
            />
          ))}
        </div>
        <div className="card-columns">
          {detail !== [] &&
            detail.map(obj => (
              <ForecastDayDetails
                key={obj.dt}
                day={this.getNameDay(obj.dt_txt)}
                time={obj.dt_txt}
                icon={obj.weather[0].icon}
                temperature={obj.main.temp}
                detail={obj.weather[0].description}
                pressure={obj.main.pressure}
                windSpeed={obj.wind.speed}
                minTemp={obj.main.temp_min}
                humidity={obj.main.humidity}
                maxTemp={obj.main.temp_max}
              />
            ))}
        </div>
      </div>
    );
  }
}

Forecast.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired
};

export default Forecast;
