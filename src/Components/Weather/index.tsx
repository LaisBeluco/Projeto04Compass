import React from "react";
// import { useNavigate } from "react-router";

// const navigator = useNavigate();

// module.exports = {
//   key: "{60e2687dceced020cd1d3f3525ed4644}",
//   base: "https://api.openweathermap.org/data/2.5/",
// }

// if (navigator.geolocation){
//   this.getPosition()
//   .then((position: any)=> {
//     this.getWeather(position.coords.latitude, position.coords.longitude);
//   });
// }else{
//   alert("Geolocation not available");
// }

navigator.geolocation.getCurrentPosition( 
  (position) => { 
    console.log('latitude is: ', position.coords.latitude); 
    console.log('longitude is: ', position.coords.longitude); 
  } 
);
// getPosition = () => { 
//   return new Promise(função (resolver, rejeitar) { 
//     navigator.geolocation.getCurrentPosition(resolver, rejeitar); 
//   }); 
// }

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={60e2687dceced020cd1d3f3525ed4644}