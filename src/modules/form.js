import { displayWeather } from "./dom";

const formData = (() => {
  const myForm = document.getElementById("user-form");
  const userInput = document.getElementById("user-input");
  const getTempUnits = document.querySelectorAll(".temp-unit");

  let locInput, tempUnit;

  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    locInput = userInput.value;
    myForm.reset();
    // console.log(locInput);
    displayWeather.getWeatherData(locInput);
  });

  getTempUnits.forEach((unit) => {
    unit.addEventListener("click", () => {
      tempUnit = unit.value;
      // console.log(locInput);
      displayWeather.toggleTempUnit(tempUnit, locInput);
    });
  });
})();

export { formData };
