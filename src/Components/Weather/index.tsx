import React, { Component } from "react";
import CompassWeader from "../../assets/CompassClound.png";
import moment from "moment";

class App extends Component {
  state = {
    lat: undefined,
    lon: undefined,
    city: undefined,
    temperatureC: undefined,
    temperatureF: undefined,
    errorMessage: undefined,
  };

  getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  getWeather = async (latitude: number, longitude: number) => {
    const api_call = await fetch(
      `//api.openweathermap.org/data/2.5/weather?lat=${latitude} &lon= ${longitude} &appid= ${process.env.REACT_APP_WEATHER_API_KEY} &units=metric`
    );
    const data = await api_call.json();
    this.setState({
      lat: latitude,
      lon: longitude,
      city: data.name,
      temperatureC: Math.round(data.main.temp),
      temperatureF: Math.round(data.main.temp * 1.8 + 32),
      icon: data.wether[0].icon,
      sunrise: moment.unix(data.sys.sunrise).format("hh:mm a"),
      sunset: moment.unix(data.sys.sunset).format("hh:mm a"),
    });
  };
  componentDidMount() {
    this.getPosition()
      .then((position: any) => {
        this.getWeather(position.coords.latitude, position.coords.longitude);
      })
      .catch((err) => {
        this.setState({ errerMessage: err.message });
      });
  }
  render() {
    const { city, temperatureC } = this.state;
    if(city){
      return(
      <>
      <div>
        <div></div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      </>)
    }
  }
}
export default App;
