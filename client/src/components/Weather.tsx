import { positions } from "@mui/system";
import { useState } from "react";
import ReactWeather, { useOpenWeather } from "react-open-weather";

export const Weather = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      setLatitude(latitude.toString());
      setLongitude(longitude.toString());
    },
    (error) => {
      console.error(error);
    }
  );

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'aeb5b2ae94619c0ffdde53a691bf93aa',
    lat: '-0.1257',
    lon: '51.5085',
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="London"
      unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
      showForecast
    />
  );
};
