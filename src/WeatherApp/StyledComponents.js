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

  /* ::placeholder,
  ::-webkit-input-placeholder {
    color: black;
    background-color: red;
    border-radius: 200px;
  }
  /* :-ms-input-placeholder {
    color: red;
  } */ */
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

const StyledContainer = styled.div`
  background-color: aquamarine;
  border-radius: 20px;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  margin-left: 400px;
  margin-right: 400px;
`;

export { ContainerDiv, InnerDiv, StyledInput, StyledButton, StyledContainer };
