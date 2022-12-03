import React, { useState } from "react";

import { InputComponent, ContainerDiv, StyledButton } from "./StyledComponent";

function App() {
  const [input, setInput] = useState("");
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (event) => {
    setInput(event.target.value);
  };

  const handleOnclick = () => {
    setIsLoading(true);
    {
      fetch(`https://api.agify.io?name=${input}`)
        .then((response) => response.json())
        .then((data) => {
          return setApiData(data), setIsLoading(false);
        });
    }
  };

  return (
    <>
      <ContainerDiv>
        <InputComponent
          type="text"
          value={input}
          onChange={handleOnChange}
        ></InputComponent>
        <StyledButton onClick={handleOnclick}>Get Details</StyledButton>
      </ContainerDiv>
      {isLoading ? (
        <ContainerDiv>"Loading..."</ContainerDiv>
      ) : (
        <ContainerDiv>
          <ul>
            <li>Name : {apiData.name}</li>
            <li>Average Age :{apiData.age}</li>
            <li>Count : {apiData.count}</li>
          </ul>
        </ContainerDiv>
      )}
    </>
  );
}

export default App;
