import styled from "styled-components";

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
`;

const StyledInput = styled.input`
  width: auto;
  font-size: 15px;
  margin-left: 10px;
  border-radius: 10px;
  border: 2px solid grey;
  padding: 5px;
`;

const StyledButton = styled.button`
  background-color: transparent;
  width: auto;
  margin-left: 15px;
  border: 2px solid grey;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
`;

export { ContainerDiv, InnerDiv, StyledInput, StyledButton };
