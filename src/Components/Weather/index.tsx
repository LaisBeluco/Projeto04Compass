import React, { useState } from "react";
import * as E from "./styled";

class Location extends React.Component {
  API_KEY = "6dd4879fa7a562c9d85fab97d4208cde";
  state = {
    lat: undefined,
    lon: undefined,
    city: undefined,
    state: undefined,
    temperatureC: undefined,
    temperatureF: undefined,
    errorMessage: undefined,
  };
  getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  getWeather = async (lat: number, lon: number) => {
    const api_call =
      await fetch(`//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6dd4879fa7a562c9d85fab97d4208cde&units=metric
            `);
    const data = await api_call.json();
    this.setState({
      lat: lat,
      lon: lon,
      city: data.name,
      state: data.name,
      temperatureC: Math.round(data.main.temp),
      temperatureF: Math.round(data.main.temp * 1.8 + 32),
      icon: data.weather[0].icon,
    });
  };

  componentDidMount() {
    this.getPosition()
      .then((position: any) => {
        this.getWeather(position.coords.latitude, position.coords.longitude);
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message });
      });
  }
  render() {
    const { city, temperatureC } = this.state;
    console.log(city);

    if (city) {
      return (
        <>
          <E.Climate>
            <E.Location>
              {city} - {city === "Brasília" ? "DF" : "SC"}
            </E.Location>
            <E.Temperature>
              <E.IconClimate />
              <E.TemperaturaNumber>{temperatureC}°</E.TemperaturaNumber>
            </E.Temperature>
          </E.Climate>
        </>
      );
    } else {
      this.getWeather(-15.7801, -47.9292);
      console.log(city);

      return (
        <>
          <E.Climate>
            <E.Location>{city} -</E.Location>
            <E.Temperature>
              <E.IconClimate />
              <E.TemperaturaNumber>{temperatureC}°</E.TemperaturaNumber>
            </E.Temperature>
          </E.Climate>
        </>
      );
    }
  }
}
export default Location;

// import React, { Component } from "react";
// import CompassWeader from "../../assets/CompassClound.png";
// import * as E from "./styled";

// class Weader extends React.Component {
//   API_KEY = "6dd4879fa7a562c9d85fab97d4208cde";

//   state = {
//     lat: undefined,
//     lon: undefined,
//     city: undefined,
//     state: undefined,
//     temperatureC: undefined,
//     temperatureF: undefined,
//     errorMessage: undefined,
//   };

//   getPosition = () => {
//     return new Promise(function (resolve, reject) {
//       navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
//   };

//   getWeather = async (lat: number, lon: number) => {
//     const api_call = await fetch(
//       `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6dd4879fa7a562c9d85fab97d4208cde&units=metric`
//     );
//     const data = await api_call.json();
//     this.setState({
//       lat: lat,
//       lon: lon,
//       city: data.name,
//       state: data.name,
//       temperatureC: Math.round(data.main.temp),
//       temperatureF: Math.round(data.main.temp * 1.8 + 32),
//       icon: data.wether[0].icon,
//     });
//   };
//   componentDidMount() {
//     this.getPosition()
//       .then((position: any) => {
//         this.getWeather(position.coords.latitude, position.coords.longitude);
//       })
//       .catch((err) => {
//         this.setState({ errorMessage: err.message });
//       });
//   }
//   render() {
//     const { city, temperatureC } = this.state;
//     console.log(city);

//     if (city) {
//       return (
//         <>
//           <E.Climate>
//             <E.Location>
//               {city} - {city === "Brasília" ? "DF" : "SC"}
//             </E.Location>
//             <E.Temperature>
//               <E.IconClimate />
//               <E.TemperaturaNumber>{temperatureC}°</E.TemperaturaNumber>
//             </E.Temperature>
//           </E.Climate>
//         </>
//       );
//     } else {
//       this.getWeather(-15.7801, -47.9292);
//       console.log(city);

//       return (
//         <>
//           <E.Climate>
//             <E.Location>{city} -</E.Location>
//             <E.Temperature>
//               <E.IconClimate />
//               <E.TemperaturaNumber>{temperatureC}°</E.TemperaturaNumber>
//             </E.Temperature>
//           </E.Climate>
//         </>
//       );
//     }
//   }
// }
// export default Weader;
