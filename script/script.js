"use strict"
//! ==================weather api request for current weather=================================
//! https://api.open-meteo.com/v1/forecast?latitude=58.03&longitude=14.87&hourly=temperature_2m&hourly=relative_humidity_2m&hourly=wind_speed_10m&hourly=wind_direction_10m

const weather = {
    currentTemp: document.getElementById("current_temperature"),
    currentHumidity: document.getElementById("current_humidity"),
    currentWindSpeed: document.getElementById("current_windSpeed"),
    currentWindDirection: document.getElementById("current_windDirection"),
}
weather.currentTemp.innerHTML = `${21}c`;
weather.currentHumidity.innerHTML = `${32}%`;
weather.currentWindSpeed.innerHTML = `${8}m/s`;
weather.currentWindDirection.innerHTML = `NE`;
console.log(weather)