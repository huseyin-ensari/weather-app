import React from "react";

const WeatherGrid = ({ weathers }) => {
  return (
    <div className="body">
      {weathers?.map((weather, index) => (
        <div key={index} className="element">
          <div className="grow1 shrink3 ">
            <img
              src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
              alt={weather?.weather[0]?.description}
            />
          </div>
          <div className="grow2 shrink3 ">
            <span>{new Date(weather?.dt * 1000).toLocaleDateString()}</span>
            <span>{weather?.temp?.day} &#8451;</span>
            <span>{weather?.weather[0]?.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherGrid;
