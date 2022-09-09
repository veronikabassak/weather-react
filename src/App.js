import "./styles.css";

export default function App() {
  let weatherData = {
    city: "New York",
    day: "Friday",
    time: "12:48pm",
    humidity: 20,
    wind: 10,
    temperature: 65,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
  };
  return (
    <div className="App">
      <div className="weatherApp">
        <h2>{weatherData.city}</h2>
        <form class="searchBar" id="city">
          <div class="row">
            <div class="col-md-9 text-center">
              <input
                type="search"
                placeholder="Type a city..."
                class="form-control"
                autocomplete="off"
                id="city-search"
              />
            </div>
            <div class="col-3">
              <div class="details">
                <br /> <button>📍Current Location</button>;
              </div>
            </div>
          </div>
          <p>
            {weatherData.day} | {weatherData.time}
          </p>
        </form>
        <div class="row">
          <div class="col-md-12 text-center">
            <img src={weatherData.imgUrl} id="icon" />
            <div id="description"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="d-flex weather-temperature">
              <span id="degrees" class="currentTemperature">
                {weatherData.temperature}°
              </span>
              °F
            </div>
          </div>
          <div class="col-6">
            <ul>
              <li>Wind: {weatherData.wind} km/h</li>
              <li>Humidity: {weatherData.humidity}%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
