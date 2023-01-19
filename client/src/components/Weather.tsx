import axios from "axios";
import { useEffect, useState } from "react";



export const Weather = () => {

  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [cityName, setCityName] = useState("");
  const [pais, setPais] = useState("");
  const [tempMin, setTempMin] = useState(0);
  const [tempMax, setTempMax] = useState(0);
  const [humidade, setHumidade] = useState(0);
  const [velocidade, setVelocidade] = useState(0);
  const [icon, setIcon] = useState("");

  const urlIcon = `http://openweathermap.org/img/wn/${icon}.png`;

  const fetchWeather = async (latitude: number, longitude: number) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=aeb5b2ae94619c0ffdde53a691bf93aa&units=metric&lang=pt_br`
    );
    return (
      setTemperature(res.data.main.temp),
      setCityName(res.data.name),
      setPais(res.data.sys.country),
      setWeather(res.data.weather[0].description),
      setIcon(res.data.weather[0].icon),
      setTempMin(res.data.main.temp_min),
      setTempMax(res.data.main.temp_max),
      setHumidade(res.data.main.humidity),
      setVelocidade(res.data.wind.speed)
    );
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      if (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetchWeather(latitude, longitude);
      }
    });
  }, []);

  return (
    <div className="text-white bg-gradient-to-t from-green-400 to-blue-500 hover:from-green-400 hover:to-yellow-500  rounded flex flex-col items-center justify-center h-full ">
      <h1 className="font-bold text-lg  text-center">{cityName}</h1>
      <span className="text-3xl my-1">{temperature.toFixed()} °C</span>
      <span className="text-xs">{tempMin.toFixed()}°C / {tempMax.toFixed()}°C</span>
      <img className="w-15" src={urlIcon} />
      <span className="mb-1">{weather}</span>
      
    </div>
  );
};
