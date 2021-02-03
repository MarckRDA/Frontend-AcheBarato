import { Slider } from "@material-ui/core";
import { React, useState } from "react";
import CathegoryNavAside from '../CathegoryNavAside/CathegoryNavAside'
import Stores from '../Stores/Stores'
import DiscountList from '../DiscountList/DiscountList'
import {Nav,Jumbotron} from "react-bootstrap";
import { NavStyled,JumbotronStyled} from "./NavigationAside";
import "./NavigationAside.css";


function NavigationAside() {
  const [range, setRange] = useState([0, 1000]);

  function ShowBaloonValue(value) {
    return `${value}`;
  }

  function HandlerPrice(e, newValue) {
    setRange(newValue);
  }

  return (
    <JumbotronStyled>

    <Nav justify fill variant="pills" defaultActiveKey="/home">
  <Nav.Item>
  <Nav.Link eventKey="link-1">Categoria</Nav.Link>
    <CathegoryNavAside />
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Preço</Nav.Link>
    <Slider
          value={range}
          onChange={HandlerPrice}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={ShowBaloonValue}
        />
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3" class="">Lojas</Nav.Link>
    <Stores listStores={["Casa e Vídeo", "Casas Bahia", "Seu quincas", "Birosca"]}/>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-4" >
      Desconto
    </Nav.Link>
    <DiscountList discounts={[20,30,40]}/>
  </Nav.Item>
</Nav>
</JumbotronStyled>


    
  );
}

export default NavigationAside;
