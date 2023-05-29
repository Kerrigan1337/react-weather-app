import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForercastDay(props) {
  return (
    <div>
      <div className="WeatherForecase-day">{props.data.dt}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecase-temperatures">
        <span className="WeatherForecase-temperatures-max">
          {props.data.temp.max}°
        </span>{" "}
        <span className="WeatherForecase-temperatures-min">
          {props.data.temp.min}°
        </span>
      </div>
    </div>
  );
}
