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
  else{
    alert("City not found")
  }
}