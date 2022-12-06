import React, { useState } from "react";
import axios, { Axios } from "axios";
import {
  ContainerDiv,
  InnerDiv,
  StyledButton,
  StyledInput,
} from "./StyledComponents";
function WeatherCard() {
  const [input, SetInput] = useState("");
  const [apiData, setApiData] = useState([]);
  const [temp, setTemp] = useState([]);
  const [minTemp, setMinTemp] = useState([]);
  const [maxTemp, setMaxTemp] = useState([]);
  const [pressure, setPressure] = useState([]);
  const [humidity, setHumidity] = useState([]);
  const [error, setError] = useState([]);
  const [wind, setWind] = useState([]);

  const handleOnChange = (e) => {
    SetInput(e.target.value);
    console.log(input);
  };

  const handleButtonClick = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=0f5ee70dcdfa521f9fbd0cacb97d71b7`
      )

      .then((data) => {
        setApiData(data.data.weather);
        setTemp(Math.round(data.data.main.temp - 273));
        setMinTemp(Math.round(data.data.main.temp_min - 273));
        setMaxTemp(Math.round(data.data.main.temp_max - 273));
        setPressure(data.data.main.pressure);
        setHumidity(data.data.main.humidity);
        setWind(data.data.wind.speed);
        setError("");
      })
      .catch((e) => {
        setError(`${input} not found.`);
        setApiData([]);
        setTemp("");
        setMinTemp("");
        setMaxTemp("");
        setPressure("");
        setHumidity("");
        setWind("");
      });
  };

  return (
    <>
      <ContainerDiv>
        <InnerDiv>
          <label for="city">City: </label>
          <StyledInput
            type="text"
            value={input}
            onChange={handleOnChange}
            name="city"
          ></StyledInput>
          <StyledButton onClick={handleButtonClick}>
            Get Weather Data
          </StyledButton>
        </InnerDiv>
      </ContainerDiv>
      <ContainerDiv>
        <div>
          {apiData.map((item) => {
            return <p>Weather: {item.description}</p>;
          })}

          <p>Temperature: {temp}°C</p>
          <p>Minimum Temperature: {minTemp}°C</p>
          <p>Maximum Temperature: {maxTemp}°C</p>
          <p>Pressure: {pressure}pa</p>
          <p>Humidity:{humidity}%</p>
          <p>Wind Speed: {wind}</p>
          <p>Error: {error}</p>
        </div>
      </ContainerDiv>
    </>
  );
}

export default WeatherCard;
