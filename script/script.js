"use strict";
// import "./secrets";
// const mapBoxToken =
//   "pk.eyJ1Ijoic3BpZWxtZWlzdGVyIiwiYSI6ImNsdGp2ZG9hOTA4YWUyam1yZnhueHBscWMifQ.VyRYo52zZVNm2OWiJvIYNQ";
// const mapBoxUUID = "e64d21a4-9e6f-4e79-bdc1-94dc4d32d9e6";
const userInput = document.getElementById("user_location");
const suggestedLocations = document.getElementById("locations");

//! ==================weather api request for current weather=================================
//! https://api.open-meteo.com/v1/forecast?latitude=58.03&longitude=14.87&hourly=temperature_2m&hourly=relative_humidity_2m&hourly=wind_speed_10m&hourly=wind_direction_10m

//todo read dataset for coördinates
//todo make get request async

const getLocationResults = (userInput) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open("get", userInput, false);
  xhttp.send(null);

  return xhttp.responseText;
};

const refreshLocationSuggestions = (e) => {
  const request = `https://api.mapbox.com/search/searchbox/v1/suggest?q=${e.target.value}&session_token=${mapbox.UUID}&access_token=${mapbox.token}`;
  const object = JSON.parse(getLocationResults(request));
  console.clear();
  console.log(object.suggestions.length);
  for (let i = 0; i < 5; i++) {
    if (suggestedLocations.children[0]) {
      suggestedLocations.removeChild(suggestedLocations.children[0]);
    }
  }
  for (let i = 0; i < object.suggestions.length; i++) {
    const location = document.createElement("option");
    console.log(object.suggestions[0]);
    location.setAttribute(
      "value",
      object.suggestions[i].full_address ||
        object.suggestions[i].place_formatted +
          " - " +
          object.suggestions[i].name
    );
    location.setAttribute("id", object.suggestions[i].mapbox_id);
    suggestedLocations.appendChild(location);
  }
};
console.log(userInput);
userInput.addEventListener("input", refreshLocationSuggestions);
