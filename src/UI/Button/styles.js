import {Button} from 'react-bootstrap';
import styled from 'styled-components';



export const ButtonStyled = styled(Button)`
display: flex;
margin-left: 1rem;

`;

const GlobalButton = styled.button`
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