// App.js
import React, { useState, useEffect } from "react";
import './../styles/App.css';

const WeatherDisplay = ({ weatherData }) => {
  const temperatureStyle = {
    color: weatherData.temperature > 20 ? 'rgb(255, 0, 0)' : 'rgb(0, 0, 255)'
  };

  return (
    <>
      <p>Temperature: <span style={temperatureStyle}>{weatherData.temperature}</span></p>
      <p>Conditions: {weatherData.conditions}</p>
    </>
  );
};

const App = () => {
  const [weatherData, setWeatherData] = useState({
    temperature: 0,
    conditions: ""
  });

  useEffect(() => {
    // Setting the weather data as per requirements
    setWeatherData({
      temperature: 25,
      conditions: "Sunny"
    });
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
};

export default App;
