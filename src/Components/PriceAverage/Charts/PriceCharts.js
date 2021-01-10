import styled from "styled-components";
import { Jumbotron } from "react-bootstrap";
import { Chart, Component } from "react-google-charts";

export const JumbotronStyled = styled(Jumbotron)
`
background-color: #ffff;
border-radius: 2rem;
color: #1a1515;
justify-content: center;
opacity: 100%;
box-shadow: inset 1px 7px 29px 9px #ffff, 0px 0px 12px 0px black
 `;

export const ChartStyled = styled(Chart)
`
 font-weight: 500;
 font-family: 'Fira Sans', sans-serif;
 font-size: 1.2rem;

 `