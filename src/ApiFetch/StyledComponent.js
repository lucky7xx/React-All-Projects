import styled from "styled-components";

const InputComponent = styled.input`
  width: auto;
  height: 30px;
  font-size: 25px;
  margin-right: 20px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
`;

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const TableStyled = styled.table`
  border: 1px solid black;
  width: 200px;
  border-collapse: collapse;
`;

const Td = styled.td`
  border: 1px solid black;
`;

const Tr = styled.tr`
  border: 1px solid black;
`;

const StyledButton = styled.button`
  width: auto;
  padding: 10px;
  font-size: 15px;
  background-color: beige;
  border-radius: 10px;
  border: 2px solid grey;
  cursor: pointer;
`;

export { InputComponent, ContainerDiv, TableStyled, Td, Tr, StyledButton };
