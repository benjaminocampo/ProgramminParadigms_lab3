import React from "react";
import WeatherForm from "./WeatherForm";
import WeatherDetails from "./WeatherDetails";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      submited: false
    };
  }

  updateLocation = location => {
    this.setState({
      location,
      submited: true
    });
  };

  render() {
    const { submited } = this.state;
    const { location } = this.state;
    return (
      <div className="container Weather clearfix">
        <div className="row Weather__form">
          <WeatherForm updateLocation={this.updateLocation} />
        </div>
        <div className="mt-4 row Weather__details">
          {submited && <WeatherDetails location={location} />}
        </div>
      </div>
    );
  }
}

export default Weather;
