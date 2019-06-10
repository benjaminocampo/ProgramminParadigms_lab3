import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Current from "./Current";
import Forecast from "./Forecast";
import ErrorMessage from "./ErrorMessage";

const button = {
  margin: "10px",
  cursor: "pointer"
};

class WeatherDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
      forecast: [],
      error: "",
      loading: false,
      show: "Current"
    };
  }

  componentDidMount() {
    this.fetchCurrent();
    this.fetchForecast();
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      this.fetchCurrent();
      this.fetchForecast();
    }
  }

  handleClickCurrent = () => {
    const { error } = this.state;
    if (error === "") this.setState({ show: "Current" });
  };

  handleClickForecast = () => {
    const { error } = this.state;
    if (error === "") this.setState({ show: "Forecast", error: "" });
  };

  fetchCurrent = async () => {
    this.setState({ loading: true, error: "" });
    try {
      const url = "http://api.openweathermap.org/data/2.5/weather";
      const { location } = this.props;
      const response = await axios.get(url, {
        params: {
          q: location,
          appid: "37202fc4687c90288f1f8cfbd99db08e",
          units: "metric"
        }
      });

      this.setState({
        loading: false,
        current: response.data,
        show: "Current"
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: "An error has occurred 😞. Please try again later.",
        current: [],
        show: ""
      });
    }
  };

  fetchForecast = async () => {
    this.setState({ loading: true, error: "" });
    try {
      const url = "http://api.openweathermap.org/data/2.5/forecast";
      const { location } = this.props;
      const response = await axios.get(url, {
        params: {
          q: location,
          appid: "37202fc4687c90288f1f8cfbd99db08e",
          units: "metric"
        }
      });

      this.setState({
        loading: false,
        forecast: response.data.list
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: "An error has occurred 😞. Please try again later.",
        forecast: [],
        show: ""
      });
    }
  };

  render() {
    let component;
    const { error } = this.state;
    const { loading } = this.state;
    const { show } = this.state;
    const { current } = this.state;
    const { forecast } = this.state;
    const loader =
      "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif";
    if (error !== "") {
      component = <ErrorMessage error={error} />;
    } else if (loading) {
      component = <img src={loader} alt="loader" />;
    } else if (show === "Current") {
      component = <Current data={current} />;
    } else if (show === "Forecast") {
      component = <Forecast data={forecast} />;
    }
    return (
      <div className="border-primary card text-center w-100">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <button
                type="button"
                style={button}
                className="nav-link active"
                onClick={this.handleClickCurrent}
              >
                Current
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                style={button}
                className="nav-link disabled"
                onClick={this.handleClickForecast}
              >
                Forecast
              </button>
            </li>
          </ul>
        </div>
        <div className="card-body">{current != null && component}</div>
      </div>
    );
  }
}

WeatherDetails.propTypes = {
  location: PropTypes.string.isRequired
};

export default WeatherDetails;