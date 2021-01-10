import * as React from "react";
import { JumbotronStyled, ChartStyled } from "./PriceCharts.js";
import "./PriceCharts.css";

const PriceCharts = () => {
  return (
    <JumbotronStyled>
      <ChartStyled
        width={'600px'}
        height={'400px'}
        chartType="Line"
        loader={<div class="container">Demonstrativo</div>}
        data={[
          [
            'Preço',
            'Nome Produto',
          ],
      // [data,preço]
          [1, 37.60,],
          [2, 38.60],
          [3, 39.60],
          [4, 35.60],
          [5, 34.60],
          [6, 33.60],
          [7, 37.60],
          [8, 37.80],
          [9, 37.90],
          [10, 37.608],
          [11, 36.60],
          [12, 34.60],
          [13, 31.60],
          [14, 28.60],
        ]}
        options={{
          chart: {
            title: 'Demonstrativo de variação',
            subtitle: 'Preço de produtos pesquisados',
          },
        }}
        rootProps={{ 'data-testid': '3' }}

      />
    </JumbotronStyled>
  );
};
export default PriceCharts;