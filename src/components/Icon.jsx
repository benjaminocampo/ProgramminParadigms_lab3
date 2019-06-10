import React from "react";
import PropTypes from "prop-types";
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightCloudy,
  WiCloud,
  WiCloudy,
  WiShowers,
  WiDayRain,
  WiNightRain,
  WiDayThunderstorm,
  WiNightThunderstorm,
  WiSnow,
  WiWindy
} from "react-icons/wi";

function Icon(props) {
  const { icon } = props;

  if (icon === "01d") return <WiDaySunny size={100} />;
  if (icon === "01n") return <WiNightClear size={100} />;
  if (icon === "02d") return <WiDayCloudy size={100} />;
  if (icon === "02n") return <WiNightCloudy size={100} />;
  if (icon === "03d" || icon === "03n") return <WiCloud size={100} />;
  if (icon === "04d" || icon === "04n") return <WiCloudy size={100} />;
  if (icon === "09d" || icon === "09n") return <WiShowers size={100} />;
  if (icon === "10d") return <WiDayRain size={100} />;
  if (icon === "10n") return <WiNightRain size={100} />;
  if (icon === "11d") return <WiDayThunderstorm size={100} />;
  if (icon === "11n") return <WiNightThunderstorm size={100} />;
  if (icon === "13d" || icon === "13n") return <WiSnow size={100} />;
  if (icon === "50d" || icon === "50n") return <WiWindy size={100} />;
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired
};

export default Icon;
