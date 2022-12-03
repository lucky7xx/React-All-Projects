import React, { useState } from "react";

import { InputComponent, ContainerDiv } from "./StyledComponent";

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
        <button onClick={handleOnclick}>Get Details</button>
      </ContainerDiv>
      {isLoading ? (
        <ContainerDiv>"Loading..."</ContainerDiv>
      ) : (
        <ContainerDiv>
          <ul>
            <li>Count : {apiData.count}</li>
            <li>Name : {apiData.name}</li>
            <li>Average Age :{apiData.age}</li>
          </ul>
        </ContainerDiv>
      )}
    </>
  );
}

export default App;
