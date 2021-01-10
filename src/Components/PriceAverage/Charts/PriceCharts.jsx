import * as React from "react";
import { Chart,Component } from "react-google-charts";
import {JumbotronStyled} from "./PriceCharts.js";
import "./PriceCharts.css";

const PriceCharts = () => {
  return (
    <JumbotronStyled>
<Chart
  width={'600px'}
  height={'400px'}
  chartType="Line"
  loader={<div class="container">Demonstrativo</div>}
  data={[
    [
      'Preço',
      'Produto 1',
      'Produto 2',
      'Produto 3',
     
    ],
    [1, 37.60, 80.8, 41.8],
    [2, 38.60, 82.5, 41.4],
    [3, 39.60, 83, 41.7],
    [4, 35.60, 85.8, 41.5],
    [5, 34.60, 82.6, 41.4],
    [6, 33.60,89.6, 41.7],
    [7, 37.60, 87.3, 41.6],
    [8, 37.80, 84.2, 41.6],
    [9, 37.90, 85.9, 41.8],
    [10,37.608, 81.9, 41.6],
    [11,36.60, 84.9, 41.7],
    [12,34.60, 83.4, 41.2],
    [13,31.60, 86.3, 41.6],
    [14,28.60, 86.2, 3.4],
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