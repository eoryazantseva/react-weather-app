import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "44d61b2c8d129fbac42ddac3d5a2004b";
  let city = "Brisbane";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Brisbane</h1>
      <ul>
        <li>Wednesday 07.00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="helper">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly Cloudy"
            />
          </div>{" "}
          <span className="temperature"> 30</span>{" "}
          <div className="unit">°C</div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 75%</li>
            <li>Wind: 5km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
