import React from "react";
import styled from "styled-components";

export default function BaseInput() {
  return <ScInput />;
}

const ScInput = styled.input`
  border: none;
  border-radius: 4px;
  padding: 16px;
  font-size: 16px;
  caret-color: #1da2dc;
  font-family: "Roboto";
  color: white;
  background-color: #212121;

  ::placeholder {
    color: #cccccc;
    opacity: 1;
  }
  :focus {
    border: none;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;
