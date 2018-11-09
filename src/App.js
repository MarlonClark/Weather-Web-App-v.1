import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Title from "./components/title";
import Form from "./components/form";
import Weather from "./components/weather";

// Weather API key from openweathermap.org
const API_KEY = "3f09b21b2de6f841426f1175189df9e0";

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined
  };

  // Use weather API to get weather data
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const apiCall = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${API_KEY}`
    );
    const data = await apiCall.json();
    // Assign State values
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].main,
        icon:
          "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png",
        error: ""
      });
    } else {
      // Handle empty fields
      this.setState({
        error: "Please enter a City and Country"
      });
    }
  };

  render() {
    return (
      <div className="App container py-2">
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          icon={this.state.icon}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
