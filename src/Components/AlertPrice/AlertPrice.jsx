import React, {useState} from "react";
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
  display: inline;
  flex: initial;
  font-size: 30px;
  padding: 0 10px 0 20px;
  color: #999;
  border: 2px solid #ccc;
  line-height: 1.5;
  border-radius: 7px;
  background: #fff;
`;

const InputPrice = styled.input`
  width: 155px;
  border-radius: 10px;
  border: none;
  color: #999;
  height: 43px;
  padding: 20px;
  display: inline-block;
  &:focus {
    outline: none;
  }
`;

const ContainerAligh = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;



const AlertPrice = () => {
  
  const [price, setPrice] = useState(0);
  
  const handleAlertPrice = () =>(
    console.log(`enviando esse preço: ${price}`)
  )
  
  return (
    <>
      <h2>Qual preço deseja pagar no produto?</h2>
      <ContainerAligh>
        <FlexContainer style={{ marginRight: 10 }}>
          <span>R$</span>
          <InputPrice type="number" min="1.0" step="0.10" max="99999" value={price} onChange={(e) => setPrice(e.target.value)} />
        </FlexContainer>
        <AlarmButton size="lg" onClick={handleAlertPrice}>Avise-me !</AlarmButton>
      </ContainerAligh>
    </>
  );
};

export default AlertPrice;
