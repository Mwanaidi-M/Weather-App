import { displayWeather } from "./dom";

const formData = (() => {
  const myForm = document.getElementById("user-form");
  const userInput = document.getElementById("user-input");
  const getTempUnits = document.querySelectorAll(".temp-unit");

  let locInput, tempUnit;

  /** When the form is submitted, the location value is passed to the  getWeatherData() function.*/
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    locInput = userInput.value;
    myForm.reset();
    // console.log(locInput);
    displayWeather.getWeatherData(locInput);
  });

  /** when the temp unit button is clicked, the value is picked as well as the location
   *  and passed to the toggleTempUnit() function. */
  getTempUnits.forEach((unit) => {
    unit.addEventListener("click", () => {
      tempUnit = unit.value;
      // console.log(locInput);
      displayWeather.toggleTempUnit(tempUnit, locInput);
    });
  });
})();

export { formData };
