import React, { useState } from "react";
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
  const [error, setError] = useState([]);

  const handleOnChange = (e) => {
    SetInput(e.target.value);
    console.log(input);
  };

  const handleButtonClick = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=0f5ee70dcdfa521f9fbd0cacb97d71b7`
    )
      .then((response) => response.json())
      .then((data) => {
        setApiData(data.weather);
        setTemp(Math.round(data.main.temp - 273));
        setMinTemp(Math.round(data.main.temp_min - 273));
        setMaxTemp(Math.round(data.main.temp_max - 273));
        setPressure(data.main.pressure);
      })
      .catch((error) => {
        setError(error.cod);
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
          <p>{error}</p>
        </div>
      </ContainerDiv>
    </>
  );
}

export default WeatherCard;
