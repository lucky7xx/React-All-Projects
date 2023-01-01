import React, { useState } from "react";

import {
  InputComponent,
  ContainerDiv,
  TableStyled,
  Tr,
  Td,
  StyledButton,
} from "./StyledComponent";

function BatchUsage() {
  const [input, setInput] = useState("");
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (event) => {
    setInput(event.target.value.split(","));
    console.log(input);
  };

  const handleOnclick = () => {
    setIsLoading(true);
    {
      fetch(`https://api.genderize.io/?name[]=${input[0]}&name[]=${input[1]}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
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
        <StyledButton onClick={handleOnclick}>Batch USage</StyledButton>
      </ContainerDiv>
      {isLoading ? (
        <ContainerDiv>"Loading..."</ContainerDiv>
      ) : input[1] === undefined && " " ? (
        <ContainerDiv>
          "Please enter 2 values separated by , to fetch the data"
        </ContainerDiv>
      ) : (
        <ContainerDiv>
          <TableStyled>
            {apiData.map((item) => {
              return (
                <>
                  <Tr>
                    <Td>Name</Td>
                    <Td>
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </Td>
                  </Tr>

                  <Tr>
                    <Td>Count</Td>
                    <Td>{item.count}</Td>
                  </Tr>

                  <Tr>
                    <Td>Probability</Td>
                    <Td>{item.probability}</Td>
                  </Tr>

                  <Tr>
                    <Td>Gender</Td>
                    <Td>{item.gender}</Td>
                  </Tr>
                  <br />
                </>
              );
            })}
          </TableStyled>
        </ContainerDiv>
      )}
    </>
  );
}

export default BatchUsage;
