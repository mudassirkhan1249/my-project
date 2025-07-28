async function getWeather() {
  const city = document.getElementById("cityInput").value;
const apiKey = "0ffcef283455cea8dfb14c3dd7cebcce"; // ⚠ Yahan apni actual API key lagana

  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();

    // JSON se data nikalna
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;

    document.getElementById("result").innerHTML = `
      Temperature: ${temp}°C <br>
      Humidity: ${humidity}% <br>
      Weather: ${description}
    `;
  } catch (error) {
    document.getElementById("result").innerText = error.message;
  }
}
