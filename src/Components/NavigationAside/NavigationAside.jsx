import { Slider } from "@material-ui/core";
import { React, useState } from "react";
import CathegoryNavAside from '../CathegoryNavAside/CathegoryNavAside'
import Stores from '../Stores/Stores'
import DiscountList from '../DiscountList/DiscountList'
import {Col,Nav} from "react-bootstrap";

function NavigationAside() {
  const [range, setRange] = useState([0, 100]);

  function ShowBaloonValue(value) {
    return `${value}`;
  }

  function HandlerPrice(e, newValue) {
    setRange(newValue);
  }

  return (
    <Nav className="justify-content-start">
      <Nav.Item as={Col}>
        <CathegoryNavAside/>
      </Nav.Item>
      <Nav.Item as={Col}>
      {/* //Todo: control price menu */}
        <h3>Preço</h3>
        <Slider
          value={range}
          onChange={HandlerPrice}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={ShowBaloonValue}
        />
      </Nav.Item>
      <Nav.Item as={Col}>
        <Stores listStores={["Casa e Vídeo", "Casas Bahia", "Seu quincas", "Birosca"]}/>
      </Nav.Item>
      <Nav.Item as={Col}>
        <DiscountList discounts={[20,30,40]}/>
      </Nav.Item>
    </Nav>
  );
}

export default NavigationAside;
