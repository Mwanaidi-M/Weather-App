import { apiFunctions } from "./api";

const formData = (() => {
  const myForm = document.getElementById("user-form");
  const userInput = document.getElementById("user-input");
  const userUnits = document.querySelectorAll(".user-unit");
  const getLocation = document.getElementById("loc-name");

  let locInput, tempUnit;

  function styleActiveButt() {
    for (let unit of userUnits) {
      unit.classList.toggle("active");
    }
  }
  userUnits.forEach((unit) => {
    unit.addEventListener("click", (e) => {
      styleActiveButt();
      tempUnit = unit.value;
      console.log(`User's Selected Unit: ${tempUnit}`);
      console.log(`User's Search Location: ${locInput}`);

      //   apiFunctions.toggleTempUnit(tempUnit, locInput);
    });
  });

  myForm.addEventListener("submit", (e) => {
    locInput = userInput.value;
    e.preventDefault();
    myForm.reset();
    console.log(`User's Search Location: ${locInput}`);
    getLocation.innerHTML = locInput;

    // apiFunctions.getCurrLocationWeather(locInput);
  });
})();

export { formData };
