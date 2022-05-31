/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiFunctions": () => (/* binding */ apiFunctions)
/* harmony export */ });
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




/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formData": () => (/* binding */ formData)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/modules/api.js");


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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/api */ "./src/modules/api.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/form */ "./src/modules/form.js");



// apiFunctions.getCurrLocationWeather(233);
// apiFunctions.toggleTempUnit("imperial", "poland");
_modules_form__WEBPACK_IMPORTED_MODULE_1__.formData;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsbUZBQW1GLFNBQVMsU0FBUyxPQUFPO0FBQzVHO0FBQ0EsMkRBQTJELGNBQWM7QUFDekU7O0FBRUE7QUFDQTtBQUNBLGFBQWEsaUJBQWlCO0FBQzlCO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtRkFBbUYsU0FBUyxTQUFTLE9BQU8sU0FBUyxLQUFLO0FBQzFIO0FBQ0EsMkRBQTJELGNBQWM7QUFDekU7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0EscUZBQXFGLElBQUksT0FBTyxLQUFLLGlDQUFpQyxPQUFPO0FBQzdJLGlDQUFpQyxjQUFjLGtCQUFrQixZQUFZO0FBQzdFO0FBQ0EsMkRBQTJELGNBQWM7QUFDekU7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUV1Qjs7Ozs7Ozs7Ozs7Ozs7OztBQzFEYTs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsU0FBUztBQUNwRCw2Q0FBNkMsU0FBUzs7QUFFdEQ7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxTQUFTO0FBQ3BEOztBQUVBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRW1COzs7Ozs7O1VDckNwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ042QztBQUNIOztBQUUxQztBQUNBO0FBQ0EsbURBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcGlGdW5jdGlvbnMgPSAoKCkgPT4ge1xuICBjb25zdCBhcGlLZXkgPSBcImJkMDAyZWE1MzM5Y2Q0YWRkYzk4MzAyM2NlOWM1MmUxXCI7XG4gIGxldCBkZWZhdWx0TG9jYXRpb24gPSBcInphbnppYmFyXCI7XG5cbiAgbGV0IGxvY2F0aW9uV2VhdGhlckVuZHBvaW50LCBjb29yZExvYywgbG9jTG9uZ2l0dWRlLCBsb2NMYXRpdHVkZTtcblxuICBhc3luYyBmdW5jdGlvbiBnZXRDdXJyTG9jYXRpb25XZWF0aGVyKGxvY2F0aW9uID0gZGVmYXVsdExvY2F0aW9uKSB7XG4gICAgbG9jYXRpb25XZWF0aGVyRW5kcG9pbnQgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZhcHBpZD0ke2FwaUtleX0mdW5pdHM9bWV0cmljYDtcbiAgICB0cnkge1xuICAgICAgbGV0IHJlc29sdmUgPSBhd2FpdCBmZXRjaChsb2NhdGlvbldlYXRoZXJFbmRwb2ludCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHJlc29sdmUuanNvbigpO1xuXG4gICAgICBpZiAocmVzcG9uc2UuY29kID49IDQwMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBgJHtyZXNwb25zZS5tZXNzYWdlfS5QbGVhc2UgZW50ZXIgYSB2YWxpZCBsb2NhdGlvbiBlLmcuIExhbXVgXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb29yZExvYyA9IHJlc3BvbnNlLmNvb3JkO1xuICAgICAgICBsb2NMYXRpdHVkZSA9IGNvb3JkTG9jLmxhdDtcbiAgICAgICAgbG9jTG9uZ2l0dWRlID0gY29vcmRMb2MubG9uO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgZ2V0U2V2ZW5EYXlXZWF0aGVyKGxvY0xvbmdpdHVkZSwgbG9jTGF0aXR1ZGUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coXCJ3ZWxsIGl0IGxvb2tzIG9rYXlcIik7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiB0b2dnbGVUZW1wVW5pdCh1bml0LCBsb2NhdGlvbiA9IGRlZmF1bHRMb2NhdGlvbikge1xuICAgIGxvY2F0aW9uV2VhdGhlckVuZHBvaW50ID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mYXBwaWQ9JHthcGlLZXl9JnVuaXRzPSR7dW5pdH1gO1xuICAgIHRyeSB7XG4gICAgICBsZXQgcmVzb2x2ZSA9IGF3YWl0IGZldGNoKGxvY2F0aW9uV2VhdGhlckVuZHBvaW50LCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgcmVzb2x2ZS5qc29uKCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0U2V2ZW5EYXlXZWF0aGVyKGxvbmcsIGxhdCkge1xuICAgIGxvY2F0aW9uV2VhdGhlckVuZHBvaW50ID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9uZ30mZXhjbHVkZT1taW51dGVseSxhbGVydHMmYXBwaWQ9JHthcGlLZXl9YDtcbiAgICAvLyBjb25zb2xlLmxvZyhgTG9uZ2l0dWRlOiAke2xvY0xvbmdpdHVkZX0gLS0tLS0gTGF0aXR1ZGU6ICR7bG9jTGF0aXR1ZGV9YCk7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNvbHZlID0gYXdhaXQgZmV0Y2gobG9jYXRpb25XZWF0aGVyRW5kcG9pbnQsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCByZXNvbHZlLmpzb24oKTtcblxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBnZXRDdXJyTG9jYXRpb25XZWF0aGVyLCB0b2dnbGVUZW1wVW5pdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgYXBpRnVuY3Rpb25zIH07XG4iLCJpbXBvcnQgeyBhcGlGdW5jdGlvbnMgfSBmcm9tIFwiLi9hcGlcIjtcblxuY29uc3QgZm9ybURhdGEgPSAoKCkgPT4ge1xuICBjb25zdCBteUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItZm9ybVwiKTtcbiAgY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLWlucHV0XCIpO1xuICBjb25zdCB1c2VyVW5pdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnVzZXItdW5pdFwiKTtcbiAgY29uc3QgZ2V0TG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYy1uYW1lXCIpO1xuXG4gIGxldCBsb2NJbnB1dCwgdGVtcFVuaXQ7XG5cbiAgZnVuY3Rpb24gc3R5bGVBY3RpdmVCdXR0KCkge1xuICAgIGZvciAobGV0IHVuaXQgb2YgdXNlclVuaXRzKSB7XG4gICAgICB1bml0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9XG4gIHVzZXJVbml0cy5mb3JFYWNoKCh1bml0KSA9PiB7XG4gICAgdW5pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHN0eWxlQWN0aXZlQnV0dCgpO1xuICAgICAgdGVtcFVuaXQgPSB1bml0LnZhbHVlO1xuICAgICAgY29uc29sZS5sb2coYFVzZXIncyBTZWxlY3RlZCBVbml0OiAke3RlbXBVbml0fWApO1xuICAgICAgY29uc29sZS5sb2coYFVzZXIncyBTZWFyY2ggTG9jYXRpb246ICR7bG9jSW5wdXR9YCk7XG5cbiAgICAgIC8vICAgYXBpRnVuY3Rpb25zLnRvZ2dsZVRlbXBVbml0KHRlbXBVbml0LCBsb2NJbnB1dCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIG15Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgbG9jSW5wdXQgPSB1c2VySW5wdXQudmFsdWU7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG15Rm9ybS5yZXNldCgpO1xuICAgIGNvbnNvbGUubG9nKGBVc2VyJ3MgU2VhcmNoIExvY2F0aW9uOiAke2xvY0lucHV0fWApO1xuICAgIGdldExvY2F0aW9uLmlubmVySFRNTCA9IGxvY0lucHV0O1xuXG4gICAgLy8gYXBpRnVuY3Rpb25zLmdldEN1cnJMb2NhdGlvbldlYXRoZXIobG9jSW5wdXQpO1xuICB9KTtcbn0pKCk7XG5cbmV4cG9ydCB7IGZvcm1EYXRhIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFwaUZ1bmN0aW9ucyB9IGZyb20gXCIuL21vZHVsZXMvYXBpXCI7XG5pbXBvcnQgeyBmb3JtRGF0YSB9IGZyb20gXCIuL21vZHVsZXMvZm9ybVwiO1xuXG4vLyBhcGlGdW5jdGlvbnMuZ2V0Q3VyckxvY2F0aW9uV2VhdGhlcigyMzMpO1xuLy8gYXBpRnVuY3Rpb25zLnRvZ2dsZVRlbXBVbml0KFwiaW1wZXJpYWxcIiwgXCJwb2xhbmRcIik7XG5mb3JtRGF0YTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==