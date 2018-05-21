import React, { Component } from 'react';

class WeatherDisplay extends Component {
  constructor() {
    super();
    
    this.state = {
      weather: null,
    };
  }
  
  componentDidMount() {
    const zip = this.props.zip;
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${zip}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial`;

    fetch(URL)
      .then(response => response.json())
      .then(data => {
        this.setState({
          weather: data,
        });
      })
  }

  render() {
    const weather = this.state.weather;
    if (!weather) {
      return <div>Loading</div>
    }
    
    const weatherData = weather.weather[0];
    const icon = `http://openweathermap.org/img/w/${weatherData.icon}.png`;
    

    return (
      <div>
        <h1>
          {weatherData.main} in {weather.name}
          <img src={icon} alt={weather.description} />
        </h1>
        <p>Current: {weather.main.temp}°</p>
        <p>High: {weather.main.temp_max}°</p>
        <p>Low: {weather.main.temp_min}°</p>
        <p>Wind Speed: {weather.wind.speed} mi/hr</p>
      </div>
    )
  }
};

export default WeatherDisplay;