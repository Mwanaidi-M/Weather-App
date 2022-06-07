/** IIFE containing async functions that call the API and return the response.json() that will be used
 *  to display the response data to the frontend.
 */

const apiFunctions = (() => {
  const apiKey = "bd002ea5339cd4addc983023ce9c52e1";
  let defaultLocation = "zanzibar";

  let locationWeatherEndpoint;

  async function getCurrLocationWeather(location = defaultLocation) {
    locationWeatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    try {
      let resolve = await fetch(locationWeatherEndpoint, { mode: "cors" });
      let response = await resolve.json();

      return response;
    } catch (error) {
      // console.log(error.message);
      return error.message;
    }
  }

  async function toggleTemp(unit, lat, lon) {
    locationWeatherEndpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${apiKey}&units=${unit}`;
    try {
      let resolve = await fetch(locationWeatherEndpoint, { mode: "cors" });
      let response = await resolve.json();

      // GET PARAM UNITS VALUE: IMPERIAL OR METRIC
      let param = new URL(locationWeatherEndpoint).searchParams;
      let unitParam = param.get("units");
      // console.log(response);
      return { unitParam, response };
    } catch (error) {
      // console.log(error.message);
      return error.message;
    }
  }
  async function getSevenDayWeather(lat, lon) {
    locationWeatherEndpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${apiKey}&units=metric`;
    // console.log(`Longitude: ${locLongitude} ----- Latitude: ${locLatitude}`);
    try {
      let resolve = await fetch(locationWeatherEndpoint, { mode: "cors" });
      let response = await resolve.json();
      // console.log(response);
      // GET PARAM UNITS VALUE: IMPERIAL OR METRIC
      let param = new URL(locationWeatherEndpoint).searchParams;
      let unitParam = param.get("units");

      return { unitParam, response };
    } catch (error) {
      // console.log(error.message);
      return error.message;
    }
  }

  return { getCurrLocationWeather, getSevenDayWeather, toggleTemp };
})();

export { apiFunctions };
