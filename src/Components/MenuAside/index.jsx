import React, { useState } from "react";
import usePriceFilter from "../../Context/hooks/usePriceFilter";
import { BrowserRouter, Link, useLocation } from "react-router-dom";
import { Button } from "../../UI/Button/index";
import { NavAside, NavAsideContent, InputPrice, LabelPrice } from "./styled";

const MenuAside = () => {
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(9999);
  const { handlerPrice } = usePriceFilter();
  const location = useLocation();

  const handlerPrices = (e) => {
    e.preventDefault();
    handlerPrice(priceMin, priceMax);
    console.log(priceMin);
  };

  return (
    <NavAside>
      <NavAsideContent>
        <form onSubmit={handlerPrices}>
          <LabelPrice style={{ margin: "10px 5px 3px 2px" }}>
            Price min
          </LabelPrice>
          <InputPrice
            style={{ marginLeft: "9px" }}
            type="number"
            value={priceMin}
            onChange={(e) => setPriceMin(e.target.value)}
          />
          <LabelPrice style={{ margin: "10px 5px 3px 2px" }}>
            Price max
          </LabelPrice>
          <InputPrice
            type="number"
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
          />
          <BrowserRouter forceRefresh={true}>
          <Button style={{ margin: "10px" }}>Filtrar</Button>
          </BrowserRouter>
        </form>
      </NavAsideContent>
    </NavAside>
  );
};

export default MenuAside;
