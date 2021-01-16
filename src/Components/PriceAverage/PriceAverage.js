import styled from "styled-components";
import { Card } from "react-bootstrap";
import VerticalTabs from '../AsideMenu/VerticalTabs';

export const CardCharts = styled(Card)`
position:fixed;
margin-top: 1rem;
margin-left: 1rem;
border-radius:2px;
border-radius: 2rem
`

export const  CardInformationProduct = styled(Card)`
position:fixed;
margin-top: 1rem;
margin-left: 30rem;
width:20rem;
height:26rem;
border-radius:2px;
border-radius: 2rem
`

export const CardChartsBody = styled(Card.Body)`
margin-bottom: 2rem;
 `

export const TitleProduct = styled.p`
font-weight:500;
font-weight: 400;
font-family: 'Fira Sans', sans-serif;
`

export const MenuAside = styled(VerticalTabs)`
position: fixed;
margin-top: 0rem;
margin-left: 1;
border-radius: 2px;
border-radius: 0rem;
` 


