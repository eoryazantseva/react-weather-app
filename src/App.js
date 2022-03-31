import React from "react";

import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded be Evgeniya Ryazantseva and is{" "}
          <a
            href="https://github.com/eoryazantseva/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
