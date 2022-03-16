import axios from "axios";
import { useEffect, useState } from "react";
import { usePosition } from "use-position";
import { Navbar, WeatherGrid } from "./components";
import "./styles/main.css";

const App = () => {
  const [city, setCity] = useState();
  const [weathers, setWeathers] = useState([]);
  const { latitude, longitude } = usePosition();
  const language = navigator.language.split("-")[0];

  const getWeatherData = async (lat, lon) => {
    try {
      const key = process.env.REACT_APP_WEATHER_API_KEY;
      const host = process.env.REACT_APP_HOST_KEY;
      const { data } = await axios.get(
        `https://community-open-weather-map.p.rapidapi.com/forecast/daily?cnt=4&lat=${lat}&lon=${lon}&units=metric&lang=${language}`,
        {
          headers: {
            "x-rapidapi-host": host,
            "x-rapidapi-key": key,
          },
        }
      );
      setWeathers(data.list);
      setCity(data.city);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <div className="app">
      <Navbar city={city} language={language} />
      <WeatherGrid weathers={weathers} />
    </div>
  );
};

export default App;
