import * as React from "react";
import "./PriceCharts.css";
import { Chart } from "react-google-charts";


const PriceCharts = () => {
  return (

    <Chart

      chartType="ColumnChart"
      spreadSheetUrl="https://docs.google.com/spreadsheets/d/1jN0iw0usssnsG1_oi-NXtuKfsUsGme09GsFidbqxFYA"
      toolbarItems={[
        {
          type: 'csv',
          datasource:
            'https://spreadsheets.google.com/tq?key=1jN0iw0usssnsG1_oi-NXtuKfsUsGme09GsFidbqxFYA',
        },
      ]}
      rootProps={{ 'data-testid': '1' }}

      width={400}
      height={'300px'}
      chartType="AreaChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['Variação de preço', 'Variação de Preços'],
        ['data1', 1000],
        ['data2', 1170],
        ['data3', 660],
        ['data4', 1030],
      ]}
      options={{
        title: 'Preço por data',
        hAxis: { title: 'Datas', titleTextStyle: { color: '#0b34eb' } },
        vAxis: { minValue: 0 },

        // For the legend to fit, we make the chart area smaller
        chartArea: { width: '50%', height: '70%' },
        // lineWidth: 25
      }}
    />


  );
};
export default PriceCharts;