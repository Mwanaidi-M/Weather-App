const apiFunctions = (() => {
  const apiKey = "bd002ea5339cd4addc983023ce9c52e1";
  let defaultLocation = "zanzibar";

  let locationWeatherEndpoint, coordLoc, locLongitude, locLatitude;

  async function getCurrLocationWeather(location = defaultLocation) {
    locationWeatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    try {
      let resolve = await fetch(locationWeatherEndpoint, { mode: "cors" });
      let response = await resolve.json();

      if (response.cod >= 400) {
        console.log(
          `${response.message}.Please enter a valid location e.g. Lamu`
        );
      } else {
        coordLoc = response.coord;
        locLatitude = coordLoc.lat;
        locLongitude = coordLoc.lon;

        console.log(response);
        getSevenDayWeather(locLongitude, locLatitude);
      }
    } catch (error) {
      console.log(error.message);
    }
    // console.log("well it looks okay");
  }

  async function toggleTempUnit(unit, location = defaultLocation) {
    locationWeatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${unit}`;
    try {
      let resolve = await fetch(locationWeatherEndpoint, { mode: "cors" });
      let response = await resolve.json();

      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function getSevenDayWeather(long, lat) {
    locationWeatherEndpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,alerts&appid=${apiKey}`;
    // console.log(`Longitude: ${locLongitude} ----- Latitude: ${locLatitude}`);
    try {
      let resolve = await fetch(locationWeatherEndpoint, { mode: "cors" });
      let response = await resolve.json();

      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  return { getCurrLocationWeather, toggleTempUnit };
})();

export { apiFunctions };
