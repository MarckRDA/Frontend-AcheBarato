import React from "react";
import styled from "styled-components";

const AlarmButton = styled.button`
  color: #ff6633;
  background-color: rgba(255, 102, 51, 0);
  border: none !important;
  width: 255px;
  border-radius: 8px;

  height: 43px;

  &:hover {
    background-color: #ff6633;
    color: #fff;
  }
  &:focus {
    outline: none;
  }
`;
const FlexContainer = styled.div`
  justify-content: flex-start;
  max-width: 300px;
  flex: 1 1 300px;
  font-size: 30px;
  padding: 0 10px 0 20px;
  color: #999;
  border: 2px solid #ccc;
  border-right: 0;
  line-height: 2.5;
  border-radius: 7px 0 0 7px;
  background: #fff;
`;

const InputPrice = styled.input`
  width: 255px;
  border-radius: 10px;
  border: none;
  height: 43px;
  padding: 20px;
  &:focus {
    outline: none;
  }
`;

const AlertPrice = () => {
  return (
    <>
      <FlexContainer    >
        <span>R$</span>
        <InputPrice type="number" min="1.0" step="0.10" max="99999" />
      </FlexContainer>
      <AlarmButton size="lg">Avise-me !</AlarmButton>
    </>
  );
};

export default AlertPrice;
