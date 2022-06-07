import { apiFunctions } from "./api";
import { formatDateImg } from "./dateImgFormat";

const displayWeather = (() => {
  const main = document.querySelector("main");

  const loader = `<div class="loader" title="Loader...">
  <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="160px" height="160px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
  <path fill="#ed254e" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
    <animateTransform attributeType="xml"
      attributeName="transform"
      type="rotate"
      from="0 25 25"
      to="360 25 25"
      dur="1.2s"
      repeatCount="indefinite"/>
    </path>
  </svg>
</div>`;
  // weather data response variables
  let response, myCoordinates, lat, lon;
  let locationCoordInfo = {};

  // current weather dom variables
  let town,
    country,
    sunRise,
    sunSet,
    dayDate,
    dayTemp,
    tempUnit,
    dayFeels,
    dayDesc,
    dayWind,
    dayHumid,
    dayPressure,
    tempSymbol;

  // hourly weather dom variables
  let hTemp, hTime;

  // daily weather dom variables
  let dDay, dDate, dMin, dMax, dDesc;

  /** Function to get location latitude & longitude */
  async function getCoords() {
    if (arguments.length == 1) {
      response = await apiFunctions.getCurrLocationWeather(arguments[0]);
    } else {
      response = await apiFunctions.getCurrLocationWeather();
    }

    if (response.cod >= 400) {
      locationCoordInfo = response.message;
    } else if (typeof response === "string") {
      locationCoordInfo = `Oops, There was an issue attempting to fetch your result. Please try again.`;
    } else {
      locationCoordInfo = response.coord;
      locationCoordInfo.name = response.name;
      locationCoordInfo.country = response.sys.country;
    }

    // console.log(locationCoordInfo);
    return locationCoordInfo;
  }

  /** With the lat & lon returned, they are passed to the getSevenDayWeather() function to generate
   *  response data then call the displayData() function to output this to the frontend.
   */
  async function getWeatherData() {
    main.innerHTML = loader;
    if (arguments.length == 1) {
      myCoordinates = await getCoords(arguments[0]);
    } else {
      myCoordinates = await getCoords();
    }
    // console.log(myCoordinates);
    lat = myCoordinates.lat;
    lon = myCoordinates.lon;
    response = await apiFunctions.getSevenDayWeather(lat, lon);
    // console.log(response);
    displayData();
  }

  /** calling the  getCoords() function to retrieve lat & lon the pass it to the toggleTemp() function
   *  then display the response data to the frontend.
   */
  async function toggleTempUnit(unit) {
    main.innerHTML = loader;
    if (arguments.length == 2) {
      myCoordinates = await getCoords(arguments[1]);
    } else {
      myCoordinates = await getCoords();
    }

    lat = myCoordinates.lat;
    lon = myCoordinates.lon;
    // console.log(`Latitude ${lat}----- Longitude ${lon}`);
    response = await apiFunctions.toggleTemp(unit, lat, lon);
    // console.log(response);
    displayData();
  }

  function styleButton(val) {
    const getTempUnits = document.querySelectorAll(".temp-unit");

    for (let unit of getTempUnits) {
      let userTemp = unit.value;
      if (userTemp === val) {
        unit.classList.add("active");
      } else {
        unit.classList.remove("active");
      }
      // console.log(userTemp);
    }
  }

  function displayData() {
    tempUnit = response.unitParam;

    styleButton(tempUnit);

    const locContainer = document.createElement("section");
    locContainer.classList.add("loc-heading");
    const locTitle = document.createElement("h1");
    locTitle.classList.add("location");

    const currWeatherContainer = document.createElement("section");
    currWeatherContainer.classList.add("curr-weather");
    const currentContainer = document.createElement("article");
    currentContainer.classList.add("current");

    const weatherIconContainer = document.createElement("div");
    weatherIconContainer.classList.add("weather-icon");
    const currWeatherIcon = document.createElement("img");
    const sunriseTime = document.createElement("p");
    const sunsetTime = document.createElement("p");

    const weatherContainer = document.createElement("div");
    weatherContainer.classList.add("weather");
    const dateDay = document.createElement("p");
    const temp = document.createElement("p");
    const feels = document.createElement("p");
    const desc = document.createElement("p");

    const moreWeatherContainer = document.createElement("div");
    moreWeatherContainer.classList.add("more-weather");
    const moreHeading = document.createElement("h3");
    const windSpeed = document.createElement("p");
    const airHumidity = document.createElement("p");
    const pressure = document.createElement("p");

    const hourlyWeatherContainer = document.createElement("article");
    hourlyWeatherContainer.classList.add("hourly");
    const hourlyHeading = document.createElement("h2");

    const dailyWeatherContainer = document.createElement("section");
    dailyWeatherContainer.classList.add("daily-weather");
    const dailyWeatherHeading = document.createElement("h2");

    main.innerHTML = "";

    if (typeof response === "string") {
      locTitle.innerHTML = `Oops! There was an issue attempting to fetch your result. Please try again.`;
      currWeatherContainer.style.display = "none";
      dailyWeatherContainer.style.display = "none";
      // console.log(response);
    } else if (response.response.cod >= 400) {
      locTitle.innerHTML = `City not found.Please enter a valid location e.g. Lamu`;
      currWeatherContainer.style.display = "none";
      dailyWeatherContainer.style.display = "none";
    } else {
      let currentDayData = response.response.current;
      let data12Hrs = response.response.hourly.slice(0, 12);
      let data8Days = response.response.daily;

      town = myCoordinates.name;
      country = myCoordinates.country;

      currWeatherIcon.alt = currentDayData.weather[0].icon;
      currWeatherIcon.src = formatDateImg.setLgImg(
        currentDayData.weather[0].icon
      );
      sunRise = formatDateImg.setFormattedTime(currentDayData.sunrise);
      sunSet = formatDateImg.setFormattedTime(currentDayData.sunset);

      dayDate = formatDateImg.setGeneralDate(currentDayData.dt);
      dayTemp = currentDayData.temp;
      dayFeels = currentDayData.feels_like;
      dayDesc = currentDayData.weather[0].description;

      dayWind = currentDayData.wind_speed;
      dayHumid = currentDayData.humidity;
      dayPressure = currentDayData.pressure;

      tempUnit === "metric" ? (tempSymbol = `°C`) : (tempSymbol = `°F`);

      locTitle.innerHTML = `${town},${country}`;

      sunriseTime.innerHTML = `Sunrise: ${sunRise}`;
      sunsetTime.innerHTML = `Sunset: ${sunSet}`;
      weatherIconContainer.append(currWeatherIcon, sunriseTime, sunsetTime);

      dateDay.innerHTML = `${dayDate}`;
      temp.innerHTML = ` ${dayTemp} ${tempSymbol}`;
      feels.innerHTML = `Feels like ${dayFeels} ${tempSymbol}`;
      desc.innerHTML = ` ${dayDesc}`;
      weatherContainer.append(dateDay, temp, feels, desc);

      moreHeading.innerHTML = "MORE DETAILS:";
      windSpeed.innerHTML = `Wind Speed: ${dayWind}m/s`;
      airHumidity.innerHTML = `Air Humidity: ${dayHumid}`;
      pressure.innerHTML = `Pressure: ${dayPressure}hPa`;
      moreWeatherContainer.append(
        moreHeading,
        windSpeed,
        airHumidity,
        pressure
      );

      hourlyHeading.innerHTML = `Hourly Forecast`;
      hourlyWeatherContainer.append(hourlyHeading);
      data12Hrs.forEach((dataHr) => {
        const hourDataContainer = document.createElement("div");
        const hourDataImg = document.createElement("img");
        const hourDataTemp = document.createElement("p");
        const hourDataTime = document.createElement("p");

        hourDataImg.alt = dataHr.weather[0].icon;
        hourDataImg.src = formatDateImg.setSmImg(dataHr.weather[0].icon);

        hTemp = dataHr.temp;
        hTime = formatDateImg.setFormattedTime(dataHr.dt);

        hourDataTemp.innerHTML = `${hTemp} ${tempSymbol}`;
        hourDataTime.innerHTML = `${hTime}`;

        hourDataContainer.append(hourDataImg, hourDataTemp, hourDataTime);
        hourlyWeatherContainer.append(hourDataContainer);
      });

      dailyWeatherHeading.innerHTML = `8-Day Forecast`;
      dailyWeatherContainer.append(dailyWeatherHeading);
      data8Days.forEach((dataDay) => {
        const dayDataContainer = document.createElement("div");

        const dateContainer = document.createElement("div");
        const dayDataName = document.createElement("p");
        const dayDataDate = document.createElement("p");

        const tempContainer = document.createElement("div");
        const dayDataMinTemp = document.createElement("p");
        const dayDataMaxTemp = document.createElement("p");

        const imgContainer = document.createElement("div");
        const dayDataImg = document.createElement("img");
        const dayDataDesc = document.createElement("p");

        dayDataImg.alt = dataDay.weather[0].icon;
        dayDataImg.src = formatDateImg.setSmImg(dataDay.weather[0].icon);

        dDay = formatDateImg.setDay(dataDay.dt);
        dDate = formatDateImg.setDateFormat(dataDay.dt);
        dMin = dataDay.temp.min;
        dMax = dataDay.temp.max;
        dDesc = dataDay.weather[0].description;

        dayDataName.innerHTML = `${dDay}`;
        dayDataDate.innerHTML = `${dDate}`;
        dayDataMinTemp.innerHTML = `min: <span>${dMin} ${tempSymbol}</span>`;
        dayDataMaxTemp.innerHTML = `max: <span>${dMax} ${tempSymbol}</span>`;
        dayDataDesc.innerHTML = `${dDesc}`;

        dateContainer.append(dayDataName, dayDataDate);
        tempContainer.append(dayDataMinTemp, dayDataMaxTemp);
        imgContainer.append(dayDataImg, dayDataDesc);

        dayDataContainer.append(dateContainer, tempContainer, imgContainer);
        dailyWeatherContainer.append(dayDataContainer);
      });
    }

    locContainer.append(locTitle);
    currentContainer.append(
      weatherIconContainer,
      weatherContainer,
      moreWeatherContainer
    );

    currWeatherContainer.append(currentContainer, hourlyWeatherContainer);
    main.append(locContainer, currWeatherContainer, dailyWeatherContainer);
    // console.log(data8Days);
    // console.log(response);
  }

  return { getCoords, getWeatherData, toggleTempUnit };
})();

export { displayWeather };
