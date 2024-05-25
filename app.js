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
  let renderedName = country.replace("_", " ").split("/")[1];
  return renderedName;
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
  if (countriesElement) {
    countriesElement.innerHTML = multipleDates;
  }
}

function changeTheCity(event) {
  const newCity = event.target.value;
  if (newCity.length > 0) {
    changeCity(newCity);
  } else {
    let changeItUp = document.querySelector(".changedCity");
    changeItUp.innerHTML = '<div class="countrySpread"></div>';
  }
}
function changeCity(city) {
  let changCityElement = document.querySelector(".changedCity");
  let selectedCity = `<div class="countryInfo">
        <div class="nameAndDate">
          <div class="cityName">${renderCityNames(city)}</div>

          <div class="currentDate">${getCurrentDate(city)}</div>
        </div>
        <div class="time">${getCurrentTime(city)}</div>
      </div>`;
  if (changCityElement) {
    changCityElement.innerHTML = selectedCity;
  }
}

const selectFormElement = document.querySelector("#cityChoice");

selectFormElement.addEventListener("change", changeTheCity);

setTime();
setInterval(setTime, 1000);

setInterval(function () {
  const selectedValue = selectFormElement.value;
  if (selectedValue.length > 1) {
    changeTheCity({ target: { value: selectedValue } });
  }
}, 1000);
