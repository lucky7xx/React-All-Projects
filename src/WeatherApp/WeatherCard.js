import React, { useState } from "react";
import axios, { Axios } from "axios";
import {
  ContainerDiv,
  InnerDiv,
  StyledButton,
  StyledInput,
  StyledContainer,
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
  const [feelsLike, setFeelsLike] = useState([]);

  const handleOnChange = (e) => {
    SetInput(e.target.value);
    console.log(input);
  };

  const handleButtonClick = () => {
    // fetch(
    //   `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=0f5ee70dcdfa521f9fbd0cacb97d71b7`
    // )
    //   .then((response) => {
    //     console.log(response);
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setApiData(data);
    //   });
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
        setFeelsLike(
          `Feels Like: ${Math.round(data.data.main.feels_like - 273)}°C`
        );
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
        setFeelsLike("");
      });
  };

  return (
    //   <StyledContainer>
    //     <ContainerDiv>
    //       <InnerDiv>
    //         <label>City: </label>
    //         <StyledInput
    //           type="text"
    //           value={input}
    //           onChange={handleOnChange}
    //           name="city"
    //           placeholder="Enter City"
    //         ></StyledInput>
    //         <StyledButton onClick={handleButtonClick}>
    //           Get Weather Data
    //         </StyledButton>
    //       </InnerDiv>
    //     </ContainerDiv>
    //     <ContainerDiv>
    //       <div>
    //         <h2>{input.toLocaleUpperCase(1)}</h2>
    //         <h3 style={{ color: "red" }}> {error} </h3>
    //         {apiData.map((item) => {
    //           return <p>Weather: {item.description}</p>;
    //         })}

    //         <p>{temp}</p>
    //         <p> {minTemp}</p>
    //         <p> {maxTemp}</p>
    //         <p>{pressure}</p>
    //         <p>{humidity}</p>
    //         <p>{wind}</p>

    //         <p> {minTemp < 20 ? "Please fuck off" : "it is sunny"}</p>
    //       </div>
    //     </ContainerDiv>
    //   </StyledContainer>

    <>
      <main>
        <div className="main-container container">
          <h1>Simple Weather App</h1>

          <input
            type="text"
            value={input}
            onChange={handleOnChange}
            name="city"
            placeholder="Enter City"
          />
          <button onClick={handleButtonClick} className="btn">
            Search
          </button>

          <div className="error">{error}</div>

          <div className="weather-container container">
            <p className="location-info">
              <span className="city">{input.toLocaleUpperCase()}</span>{" "}
              <span className="country"></span>
              <span className="time"></span>
            </p>

            {/* <img id="icon" src="" alt="icon" /> */}

            <p className="temp">{temp}</p>

            <p className="description">
              {apiData.map((item) => {
                return <p>Weather: {item.description}</p>;
              })}
            </p>

            <p className="feels-like">{feelsLike}</p>

            <p className="feels-like">{humidity}</p>

            <p className="feels-like">{wind}</p>

            <p className="feels-like">{pressure}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default WeatherCard;
