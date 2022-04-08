import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature"> {Math.round(props.celsius)}</span>{" "}
        <div className="unit">
          °C |{" "}
          <a href="/" on onClick={showFahrenheit}>
            °F{" "}
          </a>{" "}
        </div>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="temperature"> {Math.round(fahrenheit())}</span>{" "}
        <div className="unit">
          <a href="/" on onClick={showCelsius}>
            {" "}
            °C{" "}
          </a>
          | °F{" "}
        </div>
      </span>
    );
  }
}
