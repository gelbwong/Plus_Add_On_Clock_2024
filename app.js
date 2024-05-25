let countries = ["Asia/Beirut", "Europe/Kaliningrad", "Pacific/Galapagos"];

function getCurrentDate(country) {
  let currentDates = moment().tz(country).format("dddd, DD MMMM, YYYY");

  return currentDates;
}
function getCurrentTime(country) {
  let currentTime = moment().tz(country).format("h:mm:ss A");
  return currentTime;
}

function renderCityNames(country) {
  if (country === "Asia/Beirut") {
    return "Beirut";
  } else if (country === "Europe/Kaliningrad") {
    return "Kaliningrad";
  } else {
    return "Galapagos";
  }
}

function setTime() {
  index = 0;
  let multipleDates = "";

  for (country of countries) {
    multipleDates =
      multipleDates +
      `<div class="countryInfo">
        <div class="nameAndDate">
          <div class="cityName">${renderCityNames(country)}</div>

          <div class="currentDate">${getCurrentDate(country)}</div>
        </div>
        <div class="time">${getCurrentTime(country)}</div>
      </div> `;
  }
  let countriesElement = document.querySelector(".countrySpread");
  countriesElement.innerHTML = multipleDates;
}
setTime();
setInterval(setTime, 1000);
