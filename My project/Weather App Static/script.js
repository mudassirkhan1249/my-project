let cityInput = document.getElementById("cityInput");
let karachi = {
  Tempreture : `${34}°C`,
  Humidity : `${52}%`,
  wind : `${11}km/h`,
  precipitation : `${6}%`,
  uvindex : 4,
};
let lahore = {
  Tempreture : `${26}°C`,
  Humidity : `${34}%`,
  wind : `${20}km/h`,
  precipitation : `${98}%`,
  uvindex : 3,
};
let islamabad = {
  Tempreture : `${23}°C`,
  Humidity : `${36}%`,
  wind : `${21}km/h`,
  precipitation : `${93}%`,
  uvindex : 2,
};
let queeta = {
  Tempreture : `${18}°C`,
  Humidity : `${28}%`,
  wind : `${19}km/h`,
  precipitation : `${86}%`,
  uvindex : 4,
};
let peshawar = {
  Tempreture : `${30}°C`,
  Humidity : `${45}%`,
  wind : `${16}km/h`,
  precipitation : `${50}%`,
  uvindex : 6,
};



function weatherResult() {
  if (cityInput.value == "karachi") {
    document.getElementById("weatherResult-temp").innerText = `Tempreture ${karachi.Tempreture}`;
    document.getElementById("weatherResult-humi").innerText = `Humidity ${karachi.Humidity}`;
    document.getElementById("weatherResult-wind").innerText = `Wind ${karachi.wind}`;
    document.getElementById("weatherResult-pre").innerText = `Precipitation ${karachi.precipitation}`;
    document.getElementById("weatherResult-uv").innerText = `UV Index ${karachi.uvindex}`;
  }
  else if (cityInput.value == "lahore") {
    document.getElementById("weatherResult-temp").innerText = `Tempreture ${lahore.Tempreture}`;
    document.getElementById("weatherResult-humi").innerText = `Humidity ${lahore.Humidity}`;
    document.getElementById("weatherResult-wind").innerText = `Wind ${lahore.wind}`;
    document.getElementById("weatherResult-pre").innerText = `Precipitation ${lahore.precipitation}`;
    document.getElementById("weatherResult-uv").innerText = `UV Index ${lahore.uvindex}`;
  }
  else if (cityInput.value == "islamabad") {
    document.getElementById("weatherResult-temp").innerText = `Tempreture ${islamabad.Tempreture}`;
    document.getElementById("weatherResult-humi").innerText = `Humidity ${islamabad.Humidity}`;
    document.getElementById("weatherResult-wind").innerText = `Wind ${islamabad.wind}`;
    document.getElementById("weatherResult-pre").innerText = `Precipitation ${islamabad.precipitation}`;
    document.getElementById("weatherResult-uv").innerText = `UV Index ${islamabad.uvindex}`;
  }
  else if (cityInput.value == "queeta") {
    document.getElementById("weatherResult-temp").innerText = `Tempreture ${queeta.Tempreture}`;
    document.getElementById("weatherResult-humi").innerText = `Humidity ${queeta.Humidity}`;
    document.getElementById("weatherResult-wind").innerText = `Wind ${queeta.wind}`;
    document.getElementById("weatherResult-pre").innerText = `Precipitation ${queeta.precipitation}`;
    document.getElementById("weatherResult-uv").innerText = `UV Index ${queeta.uvindex}`;
  }
  else if (cityInput.value == "peshawar") {
    document.getElementById("weatherResult-temp").innerText = `Tempreture ${peshawar.Tempreture}`;
    document.getElementById("weatherResult-humi").innerText = `Humidity ${peshawar.Humidity}`;
    document.getElementById("weatherResult-wind").innerText = `Wind ${peshawar.wind}`;
    document.getElementById("weatherResult-pre").innerText = `Precipitation ${peshawar.precipitation}`;
    document.getElementById("weatherResult-uv").innerText = `UV Index ${peshawar.uvindex}`;
  }
  else{
    alert("City not found")
  }
}