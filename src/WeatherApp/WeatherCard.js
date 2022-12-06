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
        setTemp(`Temperature: ${Math.round(data.data.main.temp - 273)}°C`);
        setMinTemp(
          `Minimum Temperature: ${Math.round(data.data.main.temp_min - 273)}°C`
        );
        setMaxTemp(
          `Maximum Temperature: ${Math.round(data.data.main.temp_max - 273)}°C`
        );
        setPressure(`Pressure: ${data.data.main.pressure} Pa`);
        setHumidity(`Humidity: ${data.data.main.humidity}%`);
        setWind(`Wind Speed: ${data.data.wind.speed} km/h`);
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
        SetInput("");
      });
  };

  return (
    <>
      <ContainerDiv>
        <InnerDiv>
          <label>City: </label>
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
          <h2>{input.toLocaleUpperCase(1)}</h2>
          <h3 style={{ color: "red" }}> {error} </h3>
          {apiData.map((item) => {
            return <p>Weather: {item.description}</p>;
          })}

          <p>{temp}</p>
          <p> {minTemp}</p>
          <p> {maxTemp}</p>
          <p>{pressure}</p>
          <p>{humidity}</p>
          <p>{wind}</p>
        </div>
      </ContainerDiv>
    </>
  );
}

export default WeatherCard;
