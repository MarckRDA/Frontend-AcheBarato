import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 2em;
  display: flex;
  flex-direction:column;
  align-items: center;
  background-color:orange;
`;

export const Wrapper = styled.section`
  padding: 4em;
  background: #e99816;

`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #ee9562;
  border-radius: 3px;
`;
